import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ConfirmHire() {
  const [staffData, setStaffData] = useState(null);
  const [error, setError] = useState(null);

  const { staffNo } = useParams();

  useEffect(() => {
    if (!staffNo) {
      return; // 如果 `staffNo` 不存在，则不进行数据获取
    }

    async function fetchStaffData() {
      try {
        const response = await fetch(
          `http://localhost:3900/api/staff/${staffNo}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch staff data");
        }
        const data = await response.json();

        const staffArray = data[0];

        const transformedData = {
          staffNo: staffArray[0],
          firstName: staffArray[1],
          lastName: staffArray[2],
          position: staffArray[3],
          sex: staffArray[4],
          dob: staffArray[5],
          salary: staffArray[6],
          branchNo: staffArray[7],
          telephone: staffArray[8],
          mobile: staffArray[9],
          email: staffArray[10],
        };
        setStaffData(transformedData);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchStaffData();
  }, [staffNo]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!staffData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Staff Added</h1>
      <div>
        <p>First Name: {staffData.firstName}</p>
        <p>Last Name: {staffData.lastName}</p>
        <p>Position: {staffData.position}</p>
        <p>Sex: {staffData.sex}</p>
        <p>DOB: {new Date(staffData.dob).toLocaleDateString()}</p>
        <p>Salary: {staffData.salary}</p>
        <p>Telephone: {staffData.telephone}</p>
        <p>Mobile: {staffData.mobile}</p>
        <p>Email: {staffData.email}</p>
      </div>
      {/* <Link to={`/staff/staff-edit/${staffNo}`}>Edit</Link> */}
      <Link to="/staff/staff-list">Confirm and go to staff list</Link>
    </>
  );
}

export default ConfirmHire;
