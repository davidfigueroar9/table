import React from "react";
import PropTypes from "prop-types";
import styles from "./AmountCell.module.css";

const AmountCell = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

AmountCell.propTypes = {
  children: PropTypes.node
};

export default AmountCell;
