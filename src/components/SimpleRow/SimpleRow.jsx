import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";
import MainCell from "../MainCell";
import AmountCell from "../AmountCell";

const SimpleRow = ({ bold, label, columms, deep }) => (
  <Row bold={bold}>
    <MainCell deep={deep}>{label}</MainCell>
    {columms.map((q, index) => (
      <AmountCell key={`${index}-${q.amount}`}>{q.amount}</AmountCell>
    ))}
  </Row>
);

SimpleRow.propTypes = {
  bold: PropTypes.bool,
  label: PropTypes.node,
  columms: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string
    })
  ),
  deep: PropTypes.number
};

export default SimpleRow;
