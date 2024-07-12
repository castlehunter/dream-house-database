const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/api/users", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//localhost:1521/xe",
    });

    const result = await connection.execute(`SELECT * FROM dh_branch`);

    await connection.close();

    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

app.listen(port, () => {
  console.log(`My Server is running`);
});
