import React from "react";
import "./sideNav.css";

export default function SideNav() {
  return (
    // <div className="Navparent">
      <aside className="sideNav">
        <h1 className="Navheading">Menu</h1>
        <div className="linkParent">
          <a className="link" href="/form">
            <span className="nav">Form</span>
          </a>
          <a className="link" href="list">
            <span className="nav">Instance List</span>
          </a>
        </div>
      </aside>
    // </div>
  );
}
