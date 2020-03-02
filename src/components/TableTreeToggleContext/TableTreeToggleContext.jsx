import React from "react";

export const TableContext = React.createContext();

const TableTreeToggleContext = ({ expandedIds, onToggle, children }) => {
  return (
    <TableContext.Provider value={{ expandedIds, onToggle }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableTreeToggleContext;
