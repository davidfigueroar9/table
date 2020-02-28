import React from "react";
import HeaderTable from "../HeaderTable";
import ToggleRow from "../ToggleRow";
import SimpleRow from "../SimpleRow";

const TableTreeToggle = ({ rows, title, subTitle, columms }) => (
  <>
    <HeaderTable title={title} subTitle={subTitle} columms={columms} />
    <div>
      {rows.map(({ children, bold, label, columms, id }) =>
        children && children.length > 0 ? (
          <ToggleRow
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
    </div>
  </>
);

export default TableTreeToggle;
