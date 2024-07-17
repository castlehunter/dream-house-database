import React, { useState, useEffect } from "react";

function StaffList() {
  const [staffList, setStaffList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStaffList() {
      try {
        const response = await fetch("http://localhost:3900/api/staff-list");
        if (!response.ok) {
          throw new Error("Failed to fetch staff list");
        }
        const data = await response.json();

        // 转换数组为对象数组
        const transformedData = data.map((staff) => ({
          staffno: staff[0],
          fname: staff[1],
          lname: staff[2],
          position: staff[3],
        }));

        setStaffList(transformedData);
      } catch (error) {
        console.error("Error fetching staff list:", error);
        setError(error.message);
      }
    }

    fetchStaffList();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Staff List</h2>
      <ul>
        {staffList.map((staff) => (
          <li key={staff.staffno}>
            {staff.staffno}: {staff.fname} {staff.lname} - {staff.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaffList;