import { NextApiRequest, NextApiResponse } from "next";

import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "sql123.main-hosting.eu", // "sql123.main-hosting.eu"
  user: "u288229939_admin",
  password: "PnZvp4M7$d8!",
  database: "u288229939_prevenda",
});

// export const connection = mysql.createConnection({
//   host: "localhost", // "sql123.main-hosting.eu"
//   user: "root",
//   password: "root",
//   database: "myschema",
// });

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const email = req.query.email;
  console.log(email);
  connection.query(
    "SELECT * FROM `users` ORDER BY `id_transacao` ASC",
    decodeURI(email as string),
    function (err, result, fields) {
      if (err) throw err;
      res.json({ result: result ? result[0] : null });
    }
  );
}
