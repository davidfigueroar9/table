import React, { useState } from "react";
import PropTypes from "prop-types";
import SimpleRow from "../SimpleRow";
import SimpleRowButton from "../SimpleRowButton";

const ToggleRow = ({ bold, label, columms, deep = 0, children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <SimpleRowButton
        bold={bold}
        label={label}
        columms={columms}
        open={show}
        deep={deep}
        onChange={() => {
          setShow(!show);
        }}
      />
      {show &&
        children.map(({ children, bold, label, columms, id }) =>
          children && children.length > 0 ? (
            <ToggleRow
              deep={deep + 1}
              key={id}
              id={id}
              bold={bold}
              label={label}
              columms={columms}
              children={children}
            />
          ) : (
            <SimpleRow
              deep={deep + 1}
              key={id}
              bold={bold}
              label={label}
              columms={columms}
            />
          )
        )}
    </>
  );
};

ToggleRow.defaultProps = {
  bold: false,
  deep: 0
};

// Recursive PropTypes: source https://bit.ly/397pioi

function lazyFunction(f) {
  return function() {
    return f.apply(this, arguments);
  };
}

const lazyToggleRowPropTypes = lazyFunction(function() {
  return ToggleRowPropTypes;
});

const ToggleRowPropTypes = {
  bold: PropTypes.bool,
  label: PropTypes.node.isRequired,
  columms: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string
    })
  ).isRequired,
  deep: PropTypes.number,
  children: PropTypes.arrayOf(lazyToggleRowPropTypes).isRequired
};

ToggleRow.propTypes = ToggleRowPropTypes;

export default ToggleRow;
