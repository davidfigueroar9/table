import React from "react";
import HeaderTable from "../HeaderTable";
import TableTreeToggleContext from "../TableTreeToggleContext";
import ToggleRowControled from "../ToggleRowControled";
import SimpleRow from "../SimpleRow";

const TableTreeTogglecontrolled = ({
  rows,
  openIds,
  onToggle,
  title,
  subTitle,
  columms
}) => (
  <>
    <HeaderTable title={title} subTitle={subTitle} columms={columms} />
    <div>
      <TableTreeToggleContext openIds={openIds} onToggle={onToggle}>
        {rows.map(({ children, bold, label, columms, id }) =>
          children && children.length > 0 ? (
            <ToggleRowControled
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
  </>
);

export default TableTreeTogglecontrolled;
