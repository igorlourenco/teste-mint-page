import { NextApiRequest, NextApiResponse } from "next";

import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost", // "sql123.main-hosting.eu"
  user: "root",
  password: "root",
  database: "myschema",
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, id_transacao } = req.body;
  connection.query(
    "SELECT * FROM prevenda WHERE email = ? AND id_transacao = ?",
    [email, id_transacao],
    function (err, result, fields) {
      res.json({ result: result ? result[0] : null });
    }
  );
}
