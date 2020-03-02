import React from "react";
import PropTypes from "prop-types";
import SimpleRow from "../SimpleRow";

const SimpleRowWithButton = ({
  bold,
  label,
  columms,
  open,
  onChange,
  depth
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
      depth={depth}
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
  depth: PropTypes.number
};

export default SimpleRowWithButton;
