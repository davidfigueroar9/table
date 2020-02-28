import React from "react";
import PropTypes from "prop-types";
import styles from "./Row.module.css";

const Row = ({ children, bold }) => {
  const className = `${styles.content} ${bold ? styles.bold : ""}`;

  return <div className={className}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node,
  bold: PropTypes.bool
};

export default Row;
