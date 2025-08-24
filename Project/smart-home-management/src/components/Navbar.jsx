import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1
        style={{
          color: "#84A0EF",
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: "4rem",
          fontWeight: "bold",
          margin: 0,
          marginBottom: 0,
          lineHeight: 1,
        }}
      >
        SMART HOME{" "}
      </h1>
      <nav style={{ background: "#84A0EF", marginTop: 0 }}>
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
            justifyContent: "center",
          }}
        >
          <li>
            <Link
              style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}
              to="/zones"
            >
              Zones (Rooms)
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}
              to="/devices"
            >
              Devices
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}
              to="/routines"
            >
              Routines
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}
              to="/settings"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
