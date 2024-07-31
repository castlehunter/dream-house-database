import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "../Form.module.css";
import Button from "../Button";

function StaffEdit() {
  const [staffNo, setStaffNo] = useState(""); // Add this line
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [branchNo, setBranchNo] = useState("");
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [salary, setSalary] = useState(0);
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [existingBranchNos, setExistingBranchNos] = useState([]);
  const { staffNo: urlStaffNo } = useParams(); // Rename to avoid conflict
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStaffData() {
      try {
        const response = await fetch(
          `http://localhost:3900/api/staff/${urlStaffNo}`
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
          dob: staff[5].slice(0, 10),
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
          staffNo,
          fname,
          lname,
          position,
          dob,
          sex,
          salary,
          branchNo,
          telephone,
          mobile,
          email,
        } = transformedData[0];

        setStaffNo(staffNo); // Add this line
        setFirstName(fname);
        setLastName(lname);
        setPosition(position);
        setBranchNo(branchNo);
        setSex(sex);
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
  }, [urlStaffNo]);

  useEffect(() => {
    async function fetchBranchNos() {
      try {
        const response = await fetch(
          "http://localhost:3900/api/branch/existing-branchno"
        );
        const data = await response.json();

        setExistingBranchNos(data);
      } catch (error) {
        console.error("Error fetching exisiting branch numbers:", error);
        setError("Failed to fetch existing branch numbers");
      }
    }
    fetchBranchNos();
  }, []);

  function isValidPhoneNumber(number) {
    return /^[0-9]+$/.test(number);
  }

  function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!salary || !telephone || !email) {
      alert("Fields cannot be blank!");
      return;
    }

    if (!isValidPhoneNumber(telephone) || !isValidPhoneNumber(mobile)) {
      alert("Telephone and mobile must contain only numbers");
      return;
    }

    if (!isValidEmail(email)) {
      alert(
        "Email should be in the format of letters and/or numbers followed by @"
      );
      return;
    }

    const updatedStaff = {
      staffNo,
      salary,
      telephone,
      email,
    };

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

  function handleCancel(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className={styles.staffFormContainer}>
      <main className={styles.mainContent}>
        <section className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Staff Editing</h2>

          <form className={styles.staffForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="staffNo" className={styles.formLabel}>
                  Staff Number
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={staffNo}
                  onChange={(e) => setStaffNo(e.target.value)}
                  disabled
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.formLabel}>
                  First Name
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled
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
                  disabled
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
                  disabled
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="sex" className={styles.formLabel}>
                  Sex
                </label>
                <div className={styles.inputWithIcon}>
                  <input
                    type="text"
                    value={sex}
                    className={styles.formInput}
                    // onChange={(e) => setDob(e.target.value)}
                    disabled
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="branchNumber" className={styles.formLabel}>
                  Branch Number
                </label>
                <div className={styles.inputWithIcon}>
                  <select
                    disabled
                    value={branchNo}
                    className={styles.formInput}
                    onChange={(e) => setBranchNo(e.target.value)}
                  >
                    <option value="">Select Branch No</option>
                    {existingBranchNos.map((branchno) => (
                      <option value={branchno} key={branchno}>
                        {branchno}
                      </option>
                    ))}
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
                    disabled
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
                  disabled
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formActions}>
              <Button classType="submit">Edit</Button>
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

export default StaffEdit;
