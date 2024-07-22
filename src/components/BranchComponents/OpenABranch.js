import { useState } from "react";
import styles from "../Form.module.css";
import Button from "../Button";

function OpenABranch() {
  const [branchno, setBranchno] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleCancel() {}
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
                <div className={styles.inputWithIcon}>
                  <select
                    value={branchno}
                    className={styles.formInput}
                    onChange={(e) => setBranchno(e.target.value)}
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
              <Button classType="submit">Add</Button>
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

export default OpenABranch;
