import React from "react";
import PropTypes from "prop-types";
import styles from "./MiniBarsChart.module.css";
import { parseToPersents } from "./utils";

const MiniBarsChart = ({ values }) => {
  const {
    hasNegative,
    hasPositive,
    positivePercents,
    negativePercents
  } = parseToPersents(values);

  return (
    <div className={styles.chartContainer}>
      {hasPositive && (
        <div className={styles.chart}>
          {positivePercents.map((d, index) => (
            <div
              key={index}
              className={styles.bar}
              style={{
                height: d + "%"
              }}
            />
          ))}
        </div>
      )}

      {hasNegative && (
        <div className={styles.chartNegative}>
          {negativePercents.map((d, index) => (
            <div
              key={index}
              className={styles.barNegative}
              style={{
                height: d + "%"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

MiniBarsChart.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number)
};

export default MiniBarsChart;
