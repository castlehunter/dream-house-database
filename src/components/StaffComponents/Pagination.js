import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, currPage, onPageChange }) => {
  function handlePageClick(page) {
    onPageChange(page);
  }

  return (
    <nav className={styles.pagination} aria-label="Staff list pagination">
      <button
        className={`${styles.pageButton} ${styles.beforeButton} ${
          currPage === 1 ? styles.hidden : ""
        }`}
        onClick={() => handlePageClick(currPage - 1)}
      >
        &lt;&lt;
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`${styles.pageButton} ${
            currPage === index + 1 ? styles.active : ""
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`${styles.pageButton} ${styles.nextButton} ${
          currPage === totalPages ? styles.hidden : ""
        }`}
        onClick={() => handlePageClick(currPage + 1)}
      >
        &gt;&gt;
      </button>
    </nav>
  );
};

export default Pagination;
