// export default function Dashboard() {
//   const font = {
//     fontSize : '18px'
//   };
//   return (
//     <div className="page">
//       <h2>AI-Based Rockfall Prediction and Alert System for Open-Pit Mines</h2>
//       <p style={font}>Rockfalls in open-pit mines pose a serious threat to workers and equipment, leading to injuries, delays, and financial loss. This system leverages AI, predictive analytics, and multi-source data to transform slope stability assessments into proactive, life-saving insights.</p>
//     </div>
//   );
// }
export default function Dashboard() {
  const font = {
     fontSize : '18px'
   };
   const color1 ={
      color:'deeppink'
   };
    const color2 ={
      color:'yellow'
   };
  return (
    <div className="page">
      {/* Existing Dashboard content */}
      <h2>AI-Based Rockfall Prediction and Alert System for Open-Pit Mines
</h2>
      <p style={font}>Rockfalls in open-pit mines pose a serious threat to workers and equipment, leading to injuries, delays, and financial loss. This system leverages AI, predictive analytics, and multi-source data to transform slope stability assessments into proactive, life-saving insights.
</p>

      {/* --- New Section Starts --- */}
      <section className="capabilities">
        <h2 style={color1}>Key System Capabilities</h2>
        <div className="capabilities-grid">
          <ul>
            <li>
              <strong>Multi-Source Data Processing</strong>
              <br />
              <p style={font}>Integrates DEM, drone imagery, geotechnical sensors, and environmental data.</p>
            </li>
            <li>
              <strong>Real-Time Risk Maps</strong>
              <br />
              <p style={font}>Dynamic visualization of slope stability and vulnerable zones.</p>
              
            </li>
            <li>
              <strong>Probability-Based Forecasts</strong>
              <br />
              <p style={font}>Machine learning models predict likelihood of rockfall events with accuracy.</p>
              
            </li>
          </ul>
          <ul>
            <li>
              <strong>Automated Alert Mechanisms</strong>
              <br />
              <p  style={font}>Instant notifications via SMS and Email with suggested action plans.</p>
              
            </li>
            <li>
              <strong>Dashboard for Mine Planners</strong>
              <br />
              <p style={font}>User-friendly web/mobile interface to monitor hazards and risks.</p>
              
            </li>
            <li>
              <strong>Open-Source & Scalable</strong>
              <br />
              <p style={font}>Low-cost integration, customizable for different mines, adaptable to public/private operations.</p>
              
            </li>
          </ul>
        </div>
      </section>

      <section className="impact">
        <h2 style={color2}>Impact</h2>
        <p style={font}>
          The AI-powered rockfall prediction and alert system is designed to be cost-effective,
          scalable, and adaptable across diverse mine sites. By predicting rockfall events before
          they occur, it reduces accidents, minimizes downtime, and ensures safer and more resilient
          mining operations. The proactive approach strengthens disaster management capabilities
          while saving lives and operational costs.
        </p>
        <div className="impact-cards">
          <div className="card safety">
            <h3>Safety</h3>
            <p style={font}>Reduces risks to miners & equipment</p>
          </div>
          <div className="card scalable">
            <h3>Scalable</h3>
            <p style={font}>Adaptable for small & large mining operations</p>
          </div>
          <div className="card cost">
            <h3>Cost-Effective</h3>
            <p style={font}>Affordable alternative to proprietary systems</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="footer">
        <p>
          © 2025 Ministry of Mines | National Institute of Rock Mechanics (NIRM) | Disaster
          Management Theme
        </p>
      </footer> */}
      {/* --- New Section Ends --- */}
    </div>
  );
}
