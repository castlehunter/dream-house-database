import { useState } from "react";
import Button from "../Button";
function IdentifyBranchAddress() {
  const [branchNo, setBranchNo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter branch number: </label>
        <input value={branchNo} onChange={(e) => setBranchNo(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default IdentifyBranchAddress;
