import { useState } from "react";
import styles from "../Form.module.css";
import Button from "../Button";

function IdentifyBranchAddress() {
  const [branchNo, setBranchNo] = useState("");
  const [branchInfo, setBranchInfo] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!branchNo) {
      alert("Please enter a branch number!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3900/api/branch/${branchNo}`
      );

      if (!response.ok) {
        throw new Error("Failed to get the branch.");
      }

      const branchData = await response.json();

      if (branchData.length > 0) {
        const theBranchArray = branchData[0];

        const transformedBranchData = {
          branchNo: theBranchArray[0],
          street: theBranchArray[1],
          city: theBranchArray[2],
          postcode: theBranchArray[3],
        };
        setBranchInfo(transformedBranchData);
      } else {
        setError("Branch not found");
      }
    } catch (error) {
      console.error(error);
      setError("Error retrieving branch address");
    }
  }

  function handleClear(e) {
    e.preventDefault();
    setBranchNo("");
    setBranchInfo(null);
    setError(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="branchNo" className={styles.formLabel}>
              Enter branch number:{" "}
            </label>
            <input
              className={styles.formInput}
              value={branchNo}
              onChange={(e) => setBranchNo(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.formActions}>
          <Button classType="submit">Search</Button>
          <Button classType="cancel" onClick={handleClear}>
            Clear
          </Button>
        </div>
      </form>
      {branchInfo ? (
        <div>
          <h2>Branch Information</h2>
          <p>Branch No: {branchInfo.branchNo}</p>
          <p>Street: {branchInfo.street}</p>
          <p>City: {branchInfo.city}</p>
          <p>Postal Code: {branchInfo.postcode}</p>
        </div>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
}

export default IdentifyBranchAddress;
