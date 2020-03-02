import React from "react";
import HeaderTable from "../HeaderTable";
import TableTreeToggleContext from "../TableTreeToggleContext";
import ToggleRowControlled from "../ToggleRowControlled";
import SimpleRow from "../SimpleRow";

const TableTreeTogglecontrolled = ({
  rows,
  expandedIds,
  onToggle,
  title,
  subTitle,
  columms
}) => (
  <div style={{ overflow: "auto" }}>
    <HeaderTable title={title} subTitle={subTitle} columms={columms} />
    <div>
      <TableTreeToggleContext expandedIds={expandedIds} onToggle={onToggle}>
        {rows.map(({ children, bold, label, columms, id }) =>
          children && children.length > 0 ? (
            <ToggleRowControlled
              key={id}
              id={id}
              bold={bold}
              label={label}
              columms={columms}
              children={children}
            />
          ) : (
            <SimpleRow
              key={id}
              id={id}
              bold={bold}
              label={label}
              columms={columms}
            />
          )
        )}
      </TableTreeToggleContext>
    </div>
  </div>
);

export default TableTreeTogglecontrolled;
