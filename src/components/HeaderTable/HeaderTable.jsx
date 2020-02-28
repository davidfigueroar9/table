import React from "react";
import styles from "./HeaderTable.module.css";

const HeaderTable = ({ title, subTitle, columms }) => (
  <div className={styles.HeaderTable}>
    <div className={styles.HeaderTableLabelContent}>
      <p className={styles.HeaderTableLabel}>{title}</p>
      <p className={styles.HeaderTableLabel}>{subTitle}</p>
    </div>
    {columms.map((columm, index) => (
      <div className={styles.Column} key={index}>
        <p className={styles.range}>{columm.range}</p>
        <p className={styles.quarter}>{columm.quarter}</p>
        <p className={styles.date}>{columm.date}</p>
      </div>
    ))}
  </div>
);

export default HeaderTable;
