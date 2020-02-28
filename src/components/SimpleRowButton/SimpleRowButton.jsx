import React from "react";
import PropTypes from "prop-types";
import SimpleRow from "../SimpleRow";

const SimpleRowWithButton = ({
  bold,
  label,
  columms,
  open,
  onChange,
  deep
}) => {
  const labelWithButton = (
    <>
      <i
        className={`icon-button fa fa-chevron-right ${
          open ? "fa-rotate-90" : ""
        }`}
        onClick={onChange}
      />
      {"    "}
      {label}
    </>
  );

  return (
    <SimpleRow
      bold={bold}
      label={labelWithButton}
      columms={columms}
      deep={deep}
    />
  );
};

SimpleRowWithButton.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool,
  bold: PropTypes.bool,
  label: PropTypes.node.isRequired,
  columms: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string
    })
  ).isRequired,
  deep: PropTypes.number
};

export default SimpleRowWithButton;
