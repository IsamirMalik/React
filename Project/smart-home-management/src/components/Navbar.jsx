import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul
        style={{ display: "flex", gap: "2rem", listStyle: "none", padding: 0 }}
      >
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/zones">Zones (Rooms)</Link>
        </li>
        <li>
          <Link to="/devices">Devices</Link>
        </li>
        <li>
          <Link to="/routines">Routines</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
