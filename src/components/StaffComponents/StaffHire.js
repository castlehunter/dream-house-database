import React, { useEffect, useState } from "react";

function StaffHire() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [branchNo, setBranchNo] = useState("");
  const [dob, setDob] = useState("");
  const [salary, setSalary] = useState(0);
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const [existingStaffNos, setExistingStaffNos] = useState([]);

  useEffect(() => {
    async function fetchStaffNos() {
      try {
        const response = await fetch("http://localhost:3900/api/staffno");
        const data = await response.json();
        setExistingStaffNos(data);
      } catch (error) {
        console.error("Error fetching staff numbers:", error);
        setError("Failed to fetch existing staff numbers");
      }
    }
    fetchStaffNos();
  }, []);

  function generateStaffNo() {
    let staffNo;
    do {
      const randomNumber = Math.floor(Math.random() * 900) + 100;
      staffNo = `S${randomNumber}`;
    } while (existingStaffNos.includes(staffNo));
    return staffNo;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !position ||
      !branchNo ||
      !dob ||
      !salary ||
      !telephone ||
      !mobile ||
      !email
    ) {
      alert("Please fill in all fields");
      return;
    }

    const staffno = generateStaffNo();
    const newStaff = {
      staffno,
      firstName,
      lastName,
      position,
      branchNo,
      dob,
      salary: parseFloat(salary).toFixed(2),
      telephone,
      mobile,
      email,
    };

    try {
      const response = await fetch("http://localhost:3900/api/staff-hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStaff),
      });

      if (!response.ok) {
        throw new Error("Failed to add new staff");
      }

      // setFirstName("");
      // setLastName("");
      // setPosition("");
      // setBranchNo("");
      // setDob("");
      // setSalary(0);
      // setTelephone("");
      // setMobile("");
      // setEmail("");
    } catch (error) {
      setError(error.message);
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Staff Hiring</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Position:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <label>BranchNo:</label>
        <select value={branchNo} onChange={(e) => setBranchNo(e.target.value)}>
          <option value="" key="select"></option>
          <option value="B002" key="B002">
            B002
          </option>
          <option value="B003" key="B003">
            B003
          </option>
          <option value="B004" key="B004">
            B004
          </option>
          <option value="B005" key="B005">
            B005
          </option>
          <option value="B007" key="B007">
            B007
          </option>
        </select>

        <label>DOB:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <label>Salary:</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label>Telephone:</label>
        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <label>Mobile:</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Hiring</button>
        <button type="button">Cancel</button>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default StaffHire;
