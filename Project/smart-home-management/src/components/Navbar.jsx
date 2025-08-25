import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

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
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
              to="/zones"
            >
              Zones (Rooms)
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
              to="/devices"
            >
              Devices
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
              to="/routines"
            >
              Routines
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
              to="/settings"
            >
              Settings
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              style={{
                background: "#fff",
                color: "#84A0EF",
                border: "none",
                borderRadius: "6px",
                padding: "0.5rem 1.2rem",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                marginLeft: "1rem",
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
