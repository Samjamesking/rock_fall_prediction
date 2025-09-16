// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black/30 backdrop-blur-md fixed w-full top-0">
        <h1 className="text-2xl font-bold">Rockfall Prediction</h1>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:text-blue-400">Features</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h2 className="text-5xl font-bold mb-4">AI-Based Rockfall Prediction & Alert System</h2>
        <p className="text-lg max-w-2xl mb-6">
          Stay safe in open-pit mines with early warnings powered by AI & real-time monitoring.
        </p>
        <a href="#features" className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600">
          Learn More
        </a>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black/50">
        <h3 className="text-3xl font-bold mb-10 text-center">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/10 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Real-time Monitoring</h4>
            <p>Track slope stability with IoT and AI-powered analysis.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-3">AI Prediction</h4>
            <p>ML algorithms predict potential rockfall before it happens.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Instant Alerts</h4>
            <p>SMS/Email alerts ensure miners get notified immediately.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black/30">
        <p>© 2025 Rockfall Prediction | Built for Practice</p>
      </footer>
    </div>
  );
}
