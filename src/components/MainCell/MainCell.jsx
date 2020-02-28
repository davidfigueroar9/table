import React from "react";
import PropTypes from "prop-types";
import styles from "./MainCell.module.css";

const MainCell = ({ children, deep = 0 }) => (
  <div style={{ paddingLeft: `${30 * deep}px` }} className={styles.content}>
    {children}
  </div>
);

MainCell.propTypes = {
  children: PropTypes.node,
  deep: PropTypes.number
};

export default MainCell;
