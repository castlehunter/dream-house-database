import React, { useState, useEffect } from "react";
import styles from "./StaffList.module.css";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import SearchFilter from "./SearchFilter";
import StaffTable from "./StaffTable";
import Pagination from "./Pagination";

function StaffList() {
  const [staffData, setStaffData] = useState([]);
  const [error, setError] = useState(null);

  const [currPage, setCurrPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(staffData.length / rowsPerPage);

  function handlePageChange(page) {
    setCurrPage(page);
  }

  useEffect(() => {
    async function fetchStaffData() {
      try {
        const response = await fetch("http://localhost:3900/api/staff-list");
        if (!response.ok) {
          throw new Error("Failed to fetch staff list");
        }
        const data = await response.json();

        // 转换数组为对象数组
        const transformedData = data.map((staff) => ({
          staffNo: staff[0],
          fname: staff[1],
          lname: staff[2],
          position: staff[3],
          sex: staff[4],
          dob: staff[5],
          salary: staff[6],
          branchNo: staff[7],
          telephone: staff[8],
          mobile: staff[9],
          email: staff[10],
        }));

        setStaffData(transformedData);
      } catch (error) {
        console.error("Error fetching staff list:", error);
        setError(error.message);
      }
    }

    fetchStaffData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.staffListContainer}>
      {/* <Sidebar /> */}
      <main className={styles.mainContent}>
        {/* <Header title="Staff Main Menu" userName="Otor John" /> */}
        <section className={styles.contentWrapper}>
          {/* <SearchFilter totalStaff={250} /> */}
          <StaffTable
            staffData={staffData}
            rowsPerPage={rowsPerPage}
            currPage={currPage}
          />
          <Pagination
            totalPages={totalPages}
            currPage={currPage}
            onPageChange={handlePageChange}
          />
        </section>
        <footer className={styles.footer}>
          Copyright © 2024 Dream Home Real Estate. All Rights Reserved
        </footer>
      </main>
    </div>
  );
}

export default StaffList;
