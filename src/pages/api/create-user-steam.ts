import { NextApiRequest, NextApiResponse } from "next";

import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost", // "sql123.main-hosting.eu"
  user: "root",
  password: "root",
  database: "myschema",
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, wallet, nickname, status, edition_number, edition_name } =
    req.body;
  connection.query(
    "INSERT INTO prevenda VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      email,
      null, // id
      wallet,
      nickname,
      edition_name,
      edition_number,
      status,
      new Date(), // last_update
      null,
    ],
    function (err, result, fields) {
      if (err) throw err;
      res.json({ result: result ? result[0] : null });
    }
  );
}
