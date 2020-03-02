import React from "react";
import { LabelWithHightlight } from "./components";

export const findByTextOnTree = (data, text) => {
  let items = [];

  data.forEach(item => {
    let childrenMatch = [];
    if (item.children && item.children.length > 0) {
      childrenMatch = findByTextOnTree(item.children, text);
    }
    const indexOf = item.label
      .toLocaleLowerCase()
      .indexOf(text.toLocaleLowerCase());

    if (indexOf !== -1 || childrenMatch.length > 0) {
      let newLabel = item.label;
      if (indexOf !== -1) {
        newLabel = (
          <LabelWithHightlight label={newLabel} textToHightlight={text} />
        );
      }
      items = [...items, { ...item, label: newLabel, children: childrenMatch }];
    }
  });
  return items;
};

export const getAllIds = data => {
  let ids = [];

  data.forEach(item => {
    let childrenIds = [];
    if (item.children && item.children.length > 0) {
      childrenIds = getAllIds(item.children);
    }
    ids = [...ids, item.id, ...childrenIds];
  });
  return ids;
};
