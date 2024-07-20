import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./StaffHireEdit.module.css";

function StaffEdit() {
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

  const { staffNo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStaffData() {
      try {
        const response = await fetch(
          `http://localhost:3900/api/staff/${staffNo}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch staff data");
        }
        const staffData = await response.json();

        const transformedData = staffData.map((staff) => ({
          staffNo: staff[0],
          fname: staff[1],
          lname: staff[2],
          position: staff[3],
          sex: staff[4],
          dob: staff[5],
          salary: staff[6],
          branchNo: staff[7],
          telephone: staff[8],
          mobile: staff[9],
          email: staff[10],
        }));

        if (transformedData.length === 0) {
          throw new Error("No staff data found");
        }

        const {
          fname,
          lname,
          position,
          dob,
          salary,
          branchNo,
          telephone,
          mobile,
          email,
        } = transformedData[0];

        setFirstName(fname);
        setLastName(lname);
        setPosition(position);
        setBranchNo(branchNo);
        setDob(dob);
        setSalary(salary);
        setTelephone(telephone);
        setMobile(mobile);
        setEmail(email);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchStaffData();
  }, [staffNo]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!salary || !telephone || !email) {
      alert("Fields cannot be blank!");
      return;
    }

    const updatedStaff = {
      staffNo,
      salary,
      telephone,
      email,
    };

    console.log("Sending data:", updatedStaff); // Add this line to check the data

    try {
      const response = await fetch(
        `http://localhost:3900/api/staff/${staffNo}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedStaff),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update staff");
      }
    } catch (error) {
      setError(error.message);
    }

    navigate(`/staff/edit-confirmed/${staffNo}`);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.staffFormContainer}>
      <main className={styles.mainContent}>
        <section className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Staff Editing</h2>

          <form className={styles.staffForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.formLabel}>
                  First Name
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled="true"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.formLabel}>
                  Last Name
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled="true"
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
                  disabled="true"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="branchNumber" className={styles.formLabel}>
                  Branch Number
                </label>
                <div className={styles.inputWithIcon}>
                  <select
                    disabled="true"
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
                    disabled="true"
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
                <label htmlFor="telephone" className={styles.formLabel}>
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
                  disabled="true"
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
              <button type="submit" className={styles.submitButton}>
                Confirm Edit
              </button>
              <button type="button" className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </form>
          {error && <div>Error: {error}</div>}
        </section>
      </main>
    </div>
  );
}

export default StaffEdit;
