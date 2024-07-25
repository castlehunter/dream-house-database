import React, { useState, useEffect } from "react";
import styles from "../StaffList.module.css";
import StaffTable from "./StaffTable";
import Pagination from "../Pagination";

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
        const response = await fetch(
          "http://localhost:3900/api/staff/staff-list"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch staff list");
        }
        const data = await response.json();

        // [["SA9","Mary","Howe","Assistant","F","1970-02-19T05:00:00.000Z",9000,"B007","1338","079555 12345","MaryHowe@Dreamhome.co.uk"],["SG14","David","Ford","Supervisor","M","1958-03-24T05:00:00.000Z",18000,"B003","0223","079555 12344","DavidFord@Dreamhome.co.uk"],["SG37","Ann","Beech","Assistant","F","1960-11-10T05:00:00.000Z",12000,"B003","0224","079555 12346","AnnBeech@Dreamhome.co.uk"],["SG5","Susan","Brand","Manager","F","1940-06-03T04:00:00.000Z",24000,"B003","0225","079555 12347","SusanBrand@Dreamhome.co.uk"],["SL21","John","White","Manager","M","1945-10-01T05:00:00.000Z",30000,"B005","1512","090555 12345","JohnWhite@Dreamhome.co.uk"],["SL41","Julie","Lee","Assistant","F","1965-06-13T04:00:00.000Z",9000,"B005","1514","090555 12346","JulieLee@Dreamhome.co.uk"],["S001","John","Doe","Manager","M","1980-01-01T05:00:00.000Z",50000,"B003","1234567890","0987654321","john.doe@example.com"],["S246","Qing","Zhang","fds",null,"2024-07-01T04:00:00.000Z",4,"B002","6472199090","6472199090","vvxiaobai@gmail.com"]]

        // Convert the array to an object with key-value
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
