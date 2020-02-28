import React, { useState } from "react";
import { TableTreeToggleControlled, TableTreeToggle } from "./components";
import { rows1, columms } from "./rowData";
import { findByTextOnTree } from "./utils";
import "./styles.css";

export default function App() {
  const [ids, setIds] = useState(["1", "2", "3", "4", "5"]);
  const [text, setText] = useState("");

  const handleOnChange = e => {
    setText(e.target.value);
  };

  const rowsToShow = text ? findByTextOnTree(rows1, text) : rows1;

  const onToggle = id => {
    if (ids.includes(id)) {
      setIds(ids.filter(i => i !== id));
    } else {
      setIds([...ids, id]);
    }
  };
  return (
    <div className="App">
      {/* <TableTreeToggle
        rows={rowsToShow}
        title="Fiscal Year ends in December"
        subTitle="In Millions except ratios and margins"
        columms={columms}
      /> */}
      <h2>Controlled table</h2>
      <input
        type="text"
        placeholder="Type to filter"
        className="input"
        value={text}
        onChange={handleOnChange}
      />

      <TableTreeToggleControlled
        title="Fiscal Year ends in December"
        subTitle="In Millions except ratios and margins"
        rows={rowsToShow}
        openIds={ids}
        onToggle={onToggle}
        columms={columms}
      />
    </div>
  );
}
