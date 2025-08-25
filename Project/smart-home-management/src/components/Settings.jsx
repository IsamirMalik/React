import React, { useState } from "react";

function Settings() {
  React.useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);
  const [form, setForm] = useState({
    username: "",
    email: "",
    notifications: false,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("settings", JSON.stringify(form));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const buttonStyling = {
    background: "#fff",
    color: "#000",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: 4,
    fontWeight: 600,
    cursor: "pointer",
  };

  const formContainer = {
    background: "#84A0EF",
    padding: "1em",
    borderRadius: 8,
    width: "50vw",
    margin: "2rem auto",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  };

  const labelStyling = {
    display: "block",
    fontWeight: 500,
    fontSize: 15,
    margin: 12,
    fontFamily: "Arial, Poppins , sans-serif",
    // textAlign: "left",
  };

  const inputStyling = {
    width: "95%",
    padding: "8px",
    borderRadius: 5,
    border: "1px solid #ccc",
    fontSize: 14,
    boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
    marginBottom: 2,
    height: 32,
  };

  return (
    <div>
      <div>
        <h2
          style={{
            color: "#84A0EF",
            textAlign: "center",
            fontFamily: "inherit",
            fontSize: "4rem",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Settings
        </h2>
        <form onSubmit={handleSubmit} style={formContainer}>
          <div>
            <div>
              <label style={labelStyling}>Username</label>
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                style={inputStyling}
              />
            </div>
            <div>
              <label style={labelStyling}>Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                style={inputStyling}
              />
            </div>
            <div>
              <label
                style={{
                  fontWeight: 500,
                  fontSize: 15,
                  margin: 12,
                  fontFamily: "Arial, Poppins , sans-serif",
                }}
              >
                Notifications
              </label>
              <input
                name="notifications"
                type="checkbox"
                checked={form.notifications}
                onChange={handleChange}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "20px",
                  width: "20px",
                  height: "20px",
                  marginTop: "15px",
                }}
              />
            </div>

            <div>
              <button type="submit" style={buttonStyling}>
                Save Settings
              </button>
            </div>
            {saved && (
              <div
                style={{
                  color: "#fff",
                  marginTop: "1rem",
                  textAlign: "center",
                  fontWeight: 600,
                  background: "#84A0EF",
                  borderRadius: 6,
                  padding: "0.5rem",
                }}
              >
                Settings saved!
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
