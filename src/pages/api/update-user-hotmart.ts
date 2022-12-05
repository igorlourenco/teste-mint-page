import { NextApiRequest, NextApiResponse } from "next";

import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost", // "sql123.main-hosting.eu"
  user: "root",
  password: "root",
  database: "myschema",
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, wallet, nickname, status } = req.body;
  connection.query(
    "UPDATE prevenda SET ? WHERE email = ?",
    [
      {
        wallet,
        nickname,
        status,
        last_update: new Date(),
      },
      email,
    ],
    function (err, result, fields) {
      if (err) throw err;
      res.json({ result: result ? result[0] : null });
    }
  );
}
