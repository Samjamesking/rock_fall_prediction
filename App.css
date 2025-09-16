import React, { useState } from "react";

export default function Admin() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!adminId.trim() || !password.trim()) {
      alert("Please enter both Admin ID and Password.");
      return;
    }
    alert("Admin logged in!\nAdmin ID: ${adminId}");
    // TODO: replace with actual auth call
  };

  const pageStyle = {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    padding: "2rem",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: 500,
    background: "#172033",
    padding: "2rem",
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    color: "#e6eef8",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.06)",
    background: "#233041",
    color: "#e6eef8",
    marginBottom: 16,
    outline: "none",
    fontSize: 14,
  };

  const loginBtn = {
    marginTop: 6,
    width: "100%",
    padding: "12px 16px",
    borderRadius: 8,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 15,
  };

  return (
    <div style={pageStyle}>
      <form style={cardStyle} onSubmit={handleLogin}>
        <h2 style={{ textAlign: "center", fontSize: 22, marginBottom: 18 }}>Admin Login</h2>

        <label style={{ display: "block", marginBottom: 6, color: "#cbd5e1", fontSize: 14 }}>Admin ID</label>
        <input
          type="text"
          placeholder="Enter admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          style={inputStyle}
        />

        <label style={{ display: "block", marginBottom: 6, color: "#cbd5e1", fontSize: 14 }}>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={loginBtn}>Login</button>
      </form>
    </div>
  );
}
