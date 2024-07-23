import React, { useEffect, useState } from "react";
import styles from "../Form.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function StaffHire() {
  const [staffNo, setStaffNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [sex, setSex] = useState("");
  const [branchNo, setBranchNo] = useState("");
  const [dob, setDob] = useState("");
  const [salary, setSalary] = useState(0);
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const [existingStaffNos, setExistingStaffNos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStaffNos() {
      try {
        const response = await fetch(
          "http://localhost:3900/api/staff/existing-staffno"
        );
        const data = await response.json();
        setExistingStaffNos(data);
        setStaffNo(generateStaffNo());
      } catch (error) {
        console.error("Error fetching staff numbers:", error);
        setError("Failed to fetch existing staff numbers");
      }
    }
    fetchStaffNos();
  }, []);

  // useEffect(() => {
  //   if (existingStaffNos.length > 0) {
  //     setStaffNo(generateStaffNo());
  //   }
  // }, [existingStaffNos]);

  function generateStaffNo() {
    const prefix = "S";
    let number = 2;
    let staffNo;

    do {
      const formattedNumber = number.toString().padStart(3, "0");
      staffNo = `${prefix}${formattedNumber}`;
      number++;
    } while (existingStaffNos.includes(staffNo));

    return staffNo;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !staffNo ||
      !firstName ||
      !lastName ||
      !position ||
      !sex ||
      !branchNo ||
      !dob ||
      !salary ||
      !telephone ||
      !mobile ||
      !email
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const newStaff = {
      staffNo,
      firstName,
      lastName,
      position,
      sex,
      branchNo,
      dob,
      salary: parseFloat(salary).toFixed(2),
      telephone,
      mobile,
      email,
    };

    try {
      const response = await fetch(
        "http://localhost:3900/api/staff/staff-hire",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newStaff),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add new staff");
      }

      navigate(`/staff/hire-confirmed/${staffNo}`);
    } catch (error) {
      setError(error.message);
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function handleCancel(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className={styles.staffFormContainer}>
      <main className={styles.mainContent}>
        <section className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Staff Hiring</h2>
          <form className={styles.staffForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="staffno" className={styles.formLabel}>
                  Staff No.
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={staffNo}
                  // onChange={(e) => setStaffNo(e.target.value)}
                  readOnly
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.formLabel}>
                  First Name
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.formLabel}>
                  Last Name
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="position" className={styles.formLabel}>
                  Position
                </label>
                <input
                  type="text"
                  value={position}
                  className={styles.formInput}
                  placeholder="Enter position"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="sex" className={styles.formLabel}>
                  Sex
                </label>
                <input
                  type="text"
                  value={sex}
                  className={styles.formInput}
                  placeholder="Enter Sex"
                  onChange={(e) => setSex(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="branchNumber" className={styles.formLabel}>
                  Branch Number
                </label>
                <div className={styles.inputWithIcon}>
                  <select
                    value={branchNo}
                    className={styles.formInput}
                    onChange={(e) => setBranchNo(e.target.value)}
                  >
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
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="dob" className={styles.formLabel}>
                  DOB
                </label>
                <div className={styles.inputWithIcon}>
                  <input
                    type="date"
                    value={dob}
                    className={styles.formInput}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="salary" className={styles.formLabel}>
                  Salary:
                </label>
                <input
                  type="number"
                  className={styles.formInput}
                  placeholder="Enter salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="telePhone" className={styles.formLabel}>
                  Telephone
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobile" className={styles.formLabel}>
                  Mobile
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter mobile phone"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  className={styles.formInput}
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formActions}>
              <Button classType="submit">Hire</Button>
              <Button classType="cancel" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </form>
          {error && <div>Error: {error}</div>}
        </section>
      </main>
    </div>
  );
}

export default StaffHire;
