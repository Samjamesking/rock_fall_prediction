import React, { useState } from "react";

export default function Miner() {
  const [phone, setPhone] = useState("");
  const [selectedMineId, setSelectedMineId] = useState(null);

  const mines = [
    { id: 1, name: "Jharia Coalfield", state: "Jharkhand" },
    { id: 2, name: "Singrauli Coalfield", state: "Madhya Pradesh" },
    { id: 3, name: "Kolar Gold Fields", state: "Karnataka" },
    { id: 4, name: "Bailadila Iron Ore Mines", state: "Chhattisgarh" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim() || !selectedMineId) {
      alert("Please enter phone number and select a mine.");
      return;
    }
    const mine = mines.find((m) => m.id === selectedMineId);
    alert("Miner logged in! Phone: ${phone} Mine: ${mine.name} (${mine.state})");
    // clear if you want:
    // setPhone("");
    // setSelectedMineId(null);
  };

  // Inline styles to avoid external CSS dependency
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
    maxWidth: 480,
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
    marginBottom: 18,
    outline: "none",
    fontSize: 14,
  };

  const mineBtn = (mineId) => ({
    padding: 14,
    borderRadius: 10,
    border: selectedMineId === mineId ? "2px solid #2563eb" : "1px solid rgba(255,255,255,0.06)",
    background: selectedMineId === mineId ? "#2563eb" : "rgba(255,255,255,0.03)",
    color: selectedMineId === mineId ? "#fff" : "#cbd5e1",
    cursor: "pointer",
    textAlign: "center",
    fontSize: 14,
  });

  const submitStyle = {
    marginTop: 16,
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
      <form style={cardStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", fontSize: 22, marginBottom: 16 }}>Miner Login</h2>

        <label style={{ display: "block", marginBottom: 6, color: "#cbd5e1", fontSize: 14 }}>Phone Number</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        <label style={{ display: "block", marginBottom: 8, color: "#cbd5e1", fontSize: 14 }}>Select Mine</label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {mines.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedMineId(m.id)}
              style={mineBtn(m.id)}
            >
              <div style={{ fontWeight: 600 }}>{m.name}</div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 6 }}>{m.state}</div>
            </button>
          ))}
        </div>

        <button type="submit" style={submitStyle}>Submit</button>
      </form>
    </div>
  );
}
