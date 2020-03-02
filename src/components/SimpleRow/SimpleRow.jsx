import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";
import LabelCell from "../LabelCell";
import AmountCell from "../AmountCell";
import MiniBarsChart from "../MiniBarsChart";

const SimpleRow = ({ bold, label, columms, depth }) => (
  <Row bold={bold}>
    <LabelCell depth={depth}>{label}</LabelCell>
    <MiniBarsChart
      values={columms.map(c => parseInt(c.amount.replace(",", "")))}
    />
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
  depth: PropTypes.number
};

export default SimpleRow;
