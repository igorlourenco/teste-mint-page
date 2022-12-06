import { NextApiRequest, NextApiResponse } from "next";

import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost", // "sql123.main-hosting.eu"
  user: "u288229939_admin",
  password: "PnZvp4M7$d8!",
  database: "u288229939_prevenda",
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, wallet, nickname, status, edition_number, edition_name } =
    req.body;
  connection.query(
    "INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      null, // id
      email,
      wallet,
      nickname,
      null,
      edition_name,
      edition_number,
      status,
      new Date(), // last_update
    ],
    function (err, result, fields) {
      if (err) throw err;
      res.json({ result: result ? result[0] : null });
    }
  );
}
