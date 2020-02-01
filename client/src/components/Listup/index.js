import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function Listup({ children }) {
  return (
    <div className="list-overflow-container-uspage">
      <ul className="list-group-uspage">{children}</ul>
    </div>
  );
}

export function ListItemup({ children }) {
  return <li className="list-group-item-uspage">{children}</li>;
}
