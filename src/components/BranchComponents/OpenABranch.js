import { useState, useEffect } from "react";
import styles from "../Form.module.css";
import { useNavigate } from "react-router-dom";

function OpenABranch() {
  const [branchNo, setBranchNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState(null);
  const [existingBranchNos, setExistingBranchNos] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchExistingBranchno() {
      try {
        const res = await fetch(
          "http://localhost:3900/api/branch/existing-branchno"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setExistingBranchNos(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchExistingBranchno();
  }, []);

  function generateBranchno() {
    let number = 8;
    let branchNo;
    do {
      branchNo = number.toString().padStart(3, "0");
      branchNo = `B${branchNo}`;
      number++;
    } while (existingBranchNos.includes(branchNo));
    setBranchNo(branchNo);
    return branchNo;
  }

  // Generate branch number based on existing branch numbers
  useEffect(() => {
    if (existingBranchNos.length > 0) {
      const newBranchNo = generateBranchno();
      setBranchNo(newBranchNo);
    }
  }, [existingBranchNos]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!street || !city || !postcode) {
      alert("Please fill in all fields!");
      return;
    }

    const newBranch = {
      branchNo,
      street,
      city,
      postcode,
    };

    try {
      const response = await fetch(
        "http://localhost:3900/api/branch/open-a-branch",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBranch),
        }
      );
    } catch (error) {
      setError(error);
    }
  }

  function handleCancel(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className={styles.staffFormContainer}>
      <main className={styles.mainContent}>
        <section className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Open A Branch</h2>

          <form className={styles.staffForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="branchNo" className={styles.formLabel}>
                  Branch No.
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={branchNo}
                  readOnly
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="street" className={styles.formLabel}>
                  Street
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.formLabel}>
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    className={styles.formInput}
                    placeholder="Enter city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="postcode" className={styles.formLabel}>
                  Postal Code
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter postal code"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>

              <div className={styles.formActions}>
                <button classType="submit">Add</button>
                <button classType="cancel" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
          {error && <div>Error: {error}</div>}
        </section>
      </main>
    </div>
  );
}

export default OpenABranch;
