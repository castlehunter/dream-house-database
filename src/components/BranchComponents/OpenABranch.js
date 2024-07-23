import { useState, useEffect } from "react";
import styles from "../Form.module.css";
import Button from "../Button";

function OpenABranch() {
  const [branchno, setBranchno] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState(null);
  const [existingBranchNos, setExistingBranchNos] = useState([]);

  // Fetch existing branch numbers on component mount
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
    let newBranchNo = "";
    if (existingBranchNos.length > 0) {
      newBranchNo = Math.max(...existingBranchNos) + 1;
    }
    return newBranchNo.toString();
  }

  // Generate branch number based on existing branch numbers
  useEffect(() => {
    if (existingBranchNos.length > 0) {
      const newBranchNo = generateBranchno();
      setBranchno(newBranchNo);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // Add your form submission logic here
  }

  function handleCancel() {
    // Add your cancel logic here
  }

  return (
    <div className={styles.staffFormContainer}>
      <main className={styles.mainContent}>
        <section className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Open A Branch</h2>

          <form className={styles.staffForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="branchno" className={styles.formLabel}>
                  Branch No.
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={branchno}
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
