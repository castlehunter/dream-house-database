import React from "react";
import styles from "../Table.module.css";
import { Link } from "react-router-dom";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // 默认格式为 MM/DD/YYYY
}

function StaffTable({ staffData, rowsPerPage, currPage }) {
  const currData = staffData.slice(
    (currPage - 1) * rowsPerPage,
    currPage * rowsPerPage
  );

  return (
    <section className={styles.staffTableContainer}>
      <header className={styles.tableHeader}>
        <h2 className={styles.tableTitle}>All Staff</h2>
        <div className={styles.entriesPerPage}>
          <span>Showing</span>
          <span className={styles.entriesNumber}>{rowsPerPage}</span>
          <span>per page</span>
        </div>
      </header>

      <table className={styles.staffTable}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Staff No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Sex</th>
            <th>DOB</th>
            <th>Salary</th>
            <th>Branch No.</th>
            <th>Telephone</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currData.map((staff, index) => (
            <tr key={staff.staffNo}>
              <td>{index + 1 + (currPage - 1) * rowsPerPage}</td>
              <td>{staff.staffNo}</td>
              <td>{staff.fname}</td>
              <td>{staff.lname}</td>
              <td>{staff.position}</td>
              <td>{staff.sex}</td>
              <td>{formatDate(staff.dob)}</td>
              <td>{staff.salary}</td>
              <td>{staff.branchNo}</td>
              <td>{staff.telephone}</td>
              <td>{staff.mobile}</td>
              <td>{staff.email}</td>
              <td>
                <Link
                  to={`/staff/staff-edit/${staff.staffNo}`}
                  className={styles.editButton}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default StaffTable;
