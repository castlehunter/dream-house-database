import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Confirm({ type }) {
  const [branchData, setBranchData] = useState(null);
  const [error, setError] = useState(null);

  const { staffNo: branchNo } = useParams();

  useEffect(() => {
    if (!branchNo) {
      return;
    }

    async function fetchStaffData() {
      try {
        const response = await fetch(
          `http://localhost:3900/api/staff/${branchNo}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch staff data");
        }
        const data = await response.json();

        const branchArray = data[0];

        const transformedData = {
          branchNo: branchArray[0],
          street: branchArray[1],
          city: branchArray[2],
          postcode: branchArray[3],
        };
        setBranchData(transformedData);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchStaffData();
  }, [branchNo]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!branchData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {type === "hire" && <h1>Staff Added</h1>}
      {type === "edit" && <h1>Staff Updated</h1>}
      <div>
        <p>Branch No.: {branchData.branchNo}</p>
        <p>Street: {branchData.street}</p>
        <p>City: {branchData.city}</p>
        <p>Postal Code: {branchData.postcode}</p>
      </div>
      <Link to="/branch/identify-branch-address">
        Go to Identify Branch Address page
      </Link>
    </>
  );
}

export default Confirm;
