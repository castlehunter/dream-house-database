import { useState } from "react";

function IdentifyBranchAddress() {
  const [branchNo, setBranchNo] = useState("");
  const [branchInfo, setBranchInfo] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!branchNo) {
      alert("Please fill in branch number!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3900/api/branch-address/${branchNo}`
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

  function handleClear() {
    setBranchNo("");
    setBranchInfo(null);
    setError(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter branch number: </label>
        <input value={branchNo} onChange={(e) => setBranchNo(e.target.value)} />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
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
