import React from "react";

export const TableContext = React.createContext();

const TableTreeToggleContext = ({ openIds, onToggle, children }) => {
  return (
    <TableContext.Provider value={{ openIds, onToggle }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableTreeToggleContext;
