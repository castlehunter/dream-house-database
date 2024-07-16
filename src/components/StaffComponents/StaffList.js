import React, { useState, useEffect } from "react";

function StaffList() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    async function fetchStaffList() {
      try {
        const response = await fetch("/api/staff-list");
        if (!response.ok) {
          throw new Error("Failed to fetch staff list");
        }
        const data = await response.json();
        setStaffList(data);
      } catch (error) {
        console.error("Error fetching staff list:", error);
        // 可以在这里处理错误情况，比如显示错误消息给用户
      }
    }

    fetchStaffList();
  }, []); // 这里空数组表示只在组件挂载时执行一次

  // 添加一个新的 useEffect 钩子来监听 staffList 的变化
  useEffect(() => {
    console.log("Staff list updated:", staffList);
  }, [staffList]); // 只有当 staffList 发生变化时才会执行

  return (
    <div>
      <h2>Staff List</h2>
      <ul>
        {staffList.map((staff) => (
          <li key={staff.staffno}>
            {staff.fname} {staff.lname} - {staff.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaffList;
