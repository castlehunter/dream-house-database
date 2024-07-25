import React, { useState, useEffect } from "react";
import styles from "../StaffList.module.css";
import BranchTable from "./BranchTable";
import Pagination from "../Pagination";

function BranchList() {
  const [branchData, setBranchData] = useState([]);
  const [error, setError] = useState(null);

  const [currPage, setCurrPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(branchData.length / rowsPerPage);

  function handlePageChange(page) {
    setCurrPage(page);
  }

  useEffect(() => {
    async function fetchStaffData() {
      try {
        const response = await fetch(
          "http://localhost:3900/api/branch/branch-list"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch branch list");
        }
        const data = await response.json();

        const transformedData = data.map((branch) => ({
          branchNo: branch[0],
          street: branch[1],
          city: branch[2],
          postcode: branch[3],
        }));

        setBranchData(transformedData);
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
          <BranchTable
            branchData={branchData}
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

export default BranchList;
