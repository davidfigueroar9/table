import React, { useContext } from "react";
import PropTypes from "prop-types";
import SimpleRow from "../SimpleRow";
import SimpleRowButton from "../SimpleRowButton";
import { TableContext } from "../TableTreeToggleContext";

const ToggleRowControlled = ({
  bold,
  label,
  columms,
  depth = 0,
  children,
  id
}) => {
  const { expandedIds, onToggle } = useContext(TableContext);
  const isExpanded = expandedIds.includes(id);
  const handleOnClick = () => {
    onToggle(id);
  };

  return (
    <>
      <SimpleRowButton
        bold={bold}
        label={label}
        columms={columms}
        open={isExpanded}
        depth={depth}
        onChange={handleOnClick}
      />
      {isExpanded &&
        children.map(({ children, bold, label, columms, id }) =>
          children && children.length > 0 ? (
            <ToggleRowControlled
              depth={depth + 1}
              key={id}
              id={id}
              bold={bold}
              label={label}
              columms={columms}
              children={children}
            />
          ) : (
            <SimpleRow
              depth={depth + 1}
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

const lazyToggleRowControlledPropTypes = lazyFunction(function() {
  return ToggleRowControlledPropTypes;
});

const ToggleRowControlledPropTypes = {
  bold: PropTypes.bool,
  label: PropTypes.node.isRequired,
  columms: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string
    })
  ).isRequired,
  depth: PropTypes.number,
  children: PropTypes.arrayOf(lazyToggleRowControlledPropTypes).isRequired
};

ToggleRowControlled.propTypes = ToggleRowControlledPropTypes;

export default ToggleRowControlled;
