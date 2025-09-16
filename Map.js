import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import L from "leaflet";

// Dummy zone data
const zones = [
  { id: "ZONE_01", status: "Active", risk: "Low", percent: 15, coords: [23.75, 86.40] },
  { id: "ZONE_02", status: "Maintenance", risk: "High", percent: 90, coords: [23.76, 86.41] },
  { id: "ZONE_03", status: "Active", risk: "Medium", percent: 65, coords: [23.77, 86.42] },
  { id: "ZONE_04", status: "Active", risk: "High", percent: 80, coords: [23.78, 86.43] },
  { id: "ZONE_05", status: "Maintenance", risk: "Low", percent: 20, coords: [23.79, 86.44] },
  { id: "ZONE_06", status: "Active", risk: "High", percent: 85, coords: [23.80, 86.45] },
  { id: "ZONE_07", status: "Active", risk: "Medium", percent: 55, coords: [23.81, 86.46] },
  { id: "ZONE_08", status: "Maintenance", risk: "High", percent: 95, coords: [23.82, 86.47] },
  { id: "ZONE_09", status: "Active", risk: "Low", percent: 10, coords: [23.83, 86.48] },
  { id: "ZONE_10", status: "Active", risk: "Medium", percent: 60, coords: [23.84, 86.49] },
];

// Chart data (dummy wind forecast)
const forecastData = [
  { time: "00:00", wind: 20 },
  { time: "03:00", wind: 22 },
  { time: "06:00", wind: 35 },
  { time: "09:00", wind: 28 },
  { time: "12:00", wind: 40 },
  { time: "15:00", wind: 25 },
  { time: "18:00", wind: 38 },
  { time: "21:00", wind: 30 },
];

// Marker colors based on risk
const getMarkerColor = (risk) => {
  if (risk === "Low") return "green";
  if (risk === "Medium") return "orange";
  return "red";
};

export default function MapPage() {
  return (
    <div className="page" style={{ display: "flex", gap: "1rem" }}>
      {/* Alerts Section */}
      <div style={{ width: "25%", background: "#111827", color: "white", padding: "1rem", borderRadius: "8px", overflowY: "auto", height: "85vh" }}>
        <h3>Alerts</h3>
        {zones.map((zone, idx) => (
          <div key={idx} style={{ marginBottom: "1rem", padding: "0.5rem", background: "#1f2937", borderRadius: "6px" }}>
            <p>
              <strong>{zone.id}</strong> ({zone.status})
            </p>
            <p style={{ color: getMarkerColor(zone.risk) }}>
              {zone.risk} - {zone.percent}%
            </p>
            <button style={{ marginRight: "0.5rem" }}>Acknowledge</button>
            <button style={{ background: "blue", color: "white" }}>Highlight</button>
          </div>
        ))}
      </div>

      {/* Map + Chart Section */}
      <div style={{ flex: 1 }}>
        <h3>Mine Zone Heat Map</h3>
        <MapContainer center={[23.76, 86.42]} zoom={12} style={{ height: "400px", marginBottom: "1rem" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {zones.map((zone, idx) => (
            <Marker
              key={idx}
              position={zone.coords}
              icon={L.divIcon({
                className: "custom-icon",
                html: <div style="background:${getMarkerColor(zone.risk)}; width:15px; height:15px; border-radius:50%;"></div>,
              })}
            >
              <Popup>
                <b>{zone.id}</b>
                <br />
                Status: {zone.status}
                <br />
                Risk: {zone.risk} ({zone.percent}%)
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Forecast Chart */}
        <h3>Wind Forecast (km/h)</h3>
        <LineChart width={600} height={300} data={forecastData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="wind" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>

      {/* Risk Levels Legend */}
      <div style={{ width: "15%", background: "#111827", color: "white", padding: "1rem", borderRadius: "8px", height: "85vh" }}>
        <h3>Risk Levels</h3>
        <p style={{ color: "green" }}>Low: {zones.filter((z) => z.risk === "Low").length}</p>
        <p style={{ color: "orange" }}>Medium: {zones.filter((z) => z.risk === "Medium").length}</p>
        <p style={{ color: "red" }}>High: {zones.filter((z) => z.risk === "High").length}</p>
      </div>
    </div>
  );
}
