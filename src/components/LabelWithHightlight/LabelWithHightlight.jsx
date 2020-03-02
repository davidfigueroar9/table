import React from "react";
import styles from "./LabelWithHightlight.module.css";

const LabelWithHightlight = ({ label, textToHightlight }) => {
  const indexOf = label
    .toLocaleLowerCase()
    .indexOf(textToHightlight.toLocaleLowerCase());

  if (indexOf === -1) {
    return label;
  }

  return (
    <span>
      {label.slice(0, indexOf)}
      <span className={styles.hightlight}>
        {label.slice(indexOf, indexOf + textToHightlight.length)}
      </span>
      {label.slice(textToHightlight.length + indexOf)}
    </span>
  );
};

export default LabelWithHightlight;
