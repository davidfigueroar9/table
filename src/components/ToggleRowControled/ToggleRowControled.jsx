import React, { useContext } from "react";
import PropTypes from "prop-types";
import SimpleRow from "../SimpleRow";
import SimpleRowButton from "../SimpleRowButton";
import { TableContext } from "../TableTreeToggleContext";

const ToggleRowControled = ({
  bold,
  label,
  columms,
  deep = 0,
  children,
  id
}) => {
  const { openIds, onToggle } = useContext(TableContext);
  const show = openIds.includes(id);
  const handleOnClick = () => {
    onToggle(id);
  };

  return (
    <>
      <SimpleRowButton
        bold={bold}
        label={label}
        columms={columms}
        open={show}
        deep={deep}
        onChange={handleOnClick}
      />
      {show &&
        children.map(({ children, bold, label, columms, id }) =>
          children && children.length > 0 ? (
            <ToggleRowControled
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

// Recursive PropTypes: source https://bit.ly/397pioi

function lazyFunction(f) {
  return function() {
    return f.apply(this, arguments);
  };
}

const lazyToggleRowControledPropTypes = lazyFunction(function() {
  return ToggleRowControledPropTypes;
});

const ToggleRowControledPropTypes = {
  bold: PropTypes.bool,
  label: PropTypes.node.isRequired,
  columms: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string
    })
  ).isRequired,
  deep: PropTypes.number,
  children: PropTypes.arrayOf(lazyToggleRowControledPropTypes).isRequired
};

ToggleRowControled.propTypes = ToggleRowControledPropTypes;

export default ToggleRowControled;
