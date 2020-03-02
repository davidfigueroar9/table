import React from "react";
import PropTypes from "prop-types";
import styles from "./LabelCell.module.css";

const LabelCell = ({ children, depth }) => (
  <div style={{ paddingLeft: `${30 * depth}px` }} className={styles.content}>
    {children}
  </div>
);

LabelCell.propTypes = {
  children: PropTypes.node,
  depth: PropTypes.number
};

LabelCell.defaultProps = {
  depth: 0,
  children: null
};

export default LabelCell;
