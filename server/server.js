const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3900;

app.use(bodyParser.json());
app.use(cors());

app.get("/api/staff/existing-staffno", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(`SELECT staffno FROM dh_staff`);

    await connection.close();

    res.status(200).json(result.rows.map((row) => row[0]));
  } catch (error) {
    console.error("Error fetching staff list:", error);
    res.status(500).json({ error: "Failed to fetch staff list" });
  }
});

app.get("/api/staff/staff-list", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });
    const result = await connection.execute(
      `SELECT staffno, fname, lname, position,sex,dob,salary,branchno,telephone,mobile,email FROM dh_staff ORDER BY staffno`
    );

    await connection.close();

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching staff list:", error);
    res.status(500).json({ error: "Failed to fetch staff list" });
  }
});

app.get("/api/staff/:staffno", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(
      `SELECT staffno, fname, lname, position, sex, dob, salary, branchno, telephone, mobile, email FROM dh_staff WHERE staffno = :placeHolder`,
      [req.params.staffno]
    );

    await connection.close();

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching the staff:", error);
    res.status(500).json({ error: "Failed to fetch the staff" });
  }
});

app.post("/api/staff/staff-hire", async (req, res) => {
  const {
    staffNo,
    firstName,
    lastName,
    position,
    sex,
    dob,
    salary,
    branchNo,
    telephone,
    mobile,
    email,
  } = req.body;

  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(
      `BEGIN 
         Staff_hire_sp(
           :staffno, 
           :firstName, 
           :lastName, 
           :position, 
           :sex, 
           TO_DATE(:dob, 'YYYY-MM-DD'), 
           :salary, 
           :branchNo, 
           :telephone, 
           :mobile, 
           :email
         ); 
       END;`,
      {
        staffNo,
        firstName,
        lastName,
        position,
        sex,
        dob,
        salary,
        branchNo,
        telephone,
        mobile,
        email,
      },
      {
        autoCommit: true,
      }
    );

    await connection.close();

    res.status(200).json({ message: "Staff hired successfully!" });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Failed to hire staff" });
  }
});

app.put("/api/staff/:staffNo", async (req, res) => {
  const { salary, telephone, email } = req.body;
  const { staffNo } = req.params;

  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(
      `UPDATE dh_staff SET salary= :salary, telephone = :telephone, email = :email WHERE staffno = :staffno`,
      {
        salary,
        telephone,
        email,
        staffNo,
      },
      {
        autoCommit: true,
      }
    );

    await connection.close();
    console.log("Update result:", result);

    res.status(200).json({ message: "Staff update successfully!" });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Failed to update staff" });
  }
});

app.get("/api/branch/branch-list", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });
    const result = await connection.execute(
      `SELECT branchno, street, city, postcode FROM dh_branch ORDER BY branchno`
    );

    await connection.close();

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching branch list:", error);
    res.status(500).json({ error: "Failed to fetch branch list" });
  }
});

app.get("/api/branch/existing-branchno", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(`SELECT branchno FROM dh_branch`);

    await connection.close();

    res.status(200).json(result.rows.map((row) => row[0]));
  } catch (error) {
    console.error("Error fetching staff list:", error);
    res.status(500).json({ error: "Failed to fetch staff list" });
  }
});

app.get("/api/branch/:branchno", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(
      `SELECT branchno, street, city, postcode FROM dh_branch WHERE branchno = :branchno`,
      [req.params.branchno]
    );

    await connection.close();

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Failed to update staff" });
  }
});

app.post("/api/branch/open-a-branch", async (req, res) => {
  const { branchNo, street, city, postcode } = req.body;

  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(
      `BEGIN 
         new_branch(:branchno, :street, :city, :postcode); 
       END;`,
      {
        branchNo,
        street,
        city,
        postcode,
      },
      {
        autoCommit: true,
      }
    );

    await connection.close();

    res.status(200).json({ message: "Branch open successfully!" });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Failed to open a branch." });
  }
});

app.put("/api/branch/:branchNo", async (req, res) => {
  const { street, city, postcode } = req.body;
  const { branchNo } = req.params;

  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(
      `UPDATE dh_branch SET street = :street, city = :city, postcode = :postcode WHERE branchno = :branchno`,
      {
        branchNo,
        street,
        city,
        postcode,
      },
      {
        autoCommit: true,
      }
    );

    await connection.close();
    console.log("Update result:", result);

    res.status(200).json({ message: "Branch update successfully!" });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Failed to update staff" });
  }
});

app.get("/api/client/client-list", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });
    const result = await connection.execute(
      `SELECT clientno, fname, lname, telno, street, city, email, preftype, maxrent FROM dh_client ORDER BY clientno`
    );

    await connection.close();

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching client list:", error);
    res.status(500).json({ error: "Failed to fetch client list" });
  }
});

app.get("/api/client/existing-clientno", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(`SELECT clientno FROM dh_client`);

    await connection.close();

    res.status(200).json(result.rows.map((row) => row[0]));
  } catch (error) {
    console.error("Error fetching client list:", error);
    res.status(500).json({ error: "Failed to fetch client list" });
  }
});

app.get("/api/client/:clientNo", async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    const result = await connection.execute(
      `SELECT clientno, fname, lname, telno, street, city, email, preftype, maxrent FROM dh_client WHERE clientno = :clientNo`,
      [req.params.clientNo]
    );

    await connection.close();

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching client:", error);
    res.status(500).json({ error: "Failed to fetch client" });
  }
});

app.post("/api/client/client-add", async (req, res) => {
  const {
    clientNo,
    fname,
    lname,
    telno,
    street,
    city,
    email,
    preftype,
    maxrent,
  } = req.body;

  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    // Define the SQL query for insertion
    const sql = `
      INSERT INTO dh_client (clientNo, fname, lname, telno, street, city, email, preftype, maxrent)
      VALUES (:clientNo, :fname, :lname, :telno, :street, :city, :email, :preftype, :maxrent)
    `;

    // Execute the SQL query
    await connection.execute(
      sql,
      {
        clientNo,
        fname,
        lname,
        telno,
        street,
        city,
        email,
        preftype,
        maxrent,
      },
      {
        autoCommit: true,
      }
    );

    await connection.close();

    res.status(200).json({ message: "Client added successfully!" });
  } catch (error) {
    console.error("Error adding client:", error);
    res.status(500).json({ error: "Failed to add client" });
  }
});

app.put("/api/client/:clientNo", async (req, res) => {
  const { fname, lname, telno, street, city, email, preftype, maxrent } =
    req.body;
  const { clientNo } = req.params;

  try {
    const connection = await oracledb.getConnection({
      user: "dbs501_242v1a16",
      password: "44393138",
      connectString: "//myoracle12c.senecacollege.ca:1521/oracle12c",
    });

    // SQL query to update all fields including first name and last name
    const sql = `
      UPDATE dh_client
      SET fname = :fname,
          lname = :lname,
          telno = :telno,
          street = :street,
          city = :city,
          email = :email,
          preftype = :preftype,
          maxrent = :maxrent
      WHERE clientNo = :clientNo
    `;

    // Execute the SQL query
    const result = await connection.execute(
      sql,
      {
        fname,
        lname,
        telno,
        street,
        city,
        email,
        preftype,
        maxrent,
        clientNo,
      },
      {
        autoCommit: true,
      }
    );

    await connection.close();

    res.status(200).json({ message: "Client updated successfully!" });
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(500).json({ error: "Failed to update client" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
