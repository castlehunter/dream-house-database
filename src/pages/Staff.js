// src/pages/Staff.js 或其他页面类似
import React from "react";
import Layout from "../components/Layout";
import styles from "./Staff.module.css";

function Staff() {
  return (
    <Layout>
      <main className={styles.staff}>{/* Staff 页面特有内容 */}</main>
    </Layout>
  );
}

export default Staff;
