import { NextApiRequest, NextApiResponse } from "next";

import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost", // "sql123.main-hosting.eu"
  user: "root",
  password: "root",
  database: "myschema",
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const nickname = req.query.nickname;
  connection.query(
    "SELECT * FROM prevenda WHERE nickname = ?",
    nickname,
    function (err, result, fields) {
      res.json({ result: result ? result[0] : null });
    }
  );
}
