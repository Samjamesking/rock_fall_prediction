import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import pages
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import Miner from "./pages/Miner";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">Rockfall Prediction</h1>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/miner">Miner</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/miner" element={<Miner />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Rockfall Prediction | All Rights Reserved | CODEZEN</p>
        </footer>
      </div>
    </Router>
  );
}
