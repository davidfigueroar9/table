import React from "react";

export const findByTextOnTree = (data, text) => {
  let items = [];

  data.forEach(item => {
    let childrenMatch = [];
    if (item.children && item.children.length > 0) {
      childrenMatch = findByTextOnTree(item.children, text);
    }
    const isMatch = item.label
      .toLocaleLowerCase()
      .indexOf(text.toLocaleLowerCase());

    if (isMatch !== -1 || childrenMatch.length > 0) {
      let newLabel = item.label;
      if (isMatch !== -1) {
        newLabel = (
          <span>
            {newLabel.slice(0, isMatch)}
            <span style={{ background: "yellow" }}>
              {newLabel.slice(isMatch, isMatch + text.length)}
            </span>
            {newLabel.slice(text.length + isMatch)}
          </span>
        );
      }

      items = [...items, { ...item, label: newLabel, children: childrenMatch }];
    }
  });
  return items;
};
