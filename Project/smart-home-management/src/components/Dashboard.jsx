import React from "react";
import SmartHomeSVG from "../assets/undraw_smart-home_9s59.svg";
import HomeSettingsSVG from "../assets/undraw_home-settings_lw7v.svg";
function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={SmartHomeSVG}
        alt="Smart Home Upper Left"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "220px",
          height: "auto",
          opacity: 0.8,
          zIndex: 0,
        }}
      />
      <img
        src={HomeSettingsSVG}
        alt="Home Settings Lower Left"
        style={{
          position: "fixed",
          bottom: 0,
          left: 1300,
          width: "200px",
          height: "auto",
          opacity: 0.8,
          zIndex: 0,
        }}
      />
      <h1
        style={{
          color: "#84A0EF",
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: "4rem",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        Dashboard
      </h1>
      <p
        style={{
          textAlign: "center",
          width: "80%",
          margin: "3rem auto",
          fontSize: "1.2rem",
          color: "#333",
          background: "rgba(255,255,255,0.8)",
          borderRadius: 8,
          padding: "1rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          fontFamily: "cursive",
          fontSize: "2rem",
        }}
      >
        Welcome to the Smart Home Management App! Here you can easily monitor
        and control all your home devices, manage rooms and zones, set up
        automated routines, and customize your home settings. Use the navigation
        bar above to access different features and make your home smarter,
        safer, and more efficient.
      </p>
    </div>
  );
}
export default Dashboard;
