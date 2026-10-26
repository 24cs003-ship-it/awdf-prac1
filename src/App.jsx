import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

// Root App component: Configures BrowserRouter, client-side Routes, and shared layout components
function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-app-wrapper">
        {/* Dynamic ambient glowing background orbs */}
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <div className="ambient-blob blob-3"></div>

        <div className="portfolio-container">
          {/* 1. Shared Navigation Bar with active NavLinks */}
          <Navbar />

          {/* 2. Client-Side Page Routes */}
          <main className="portfolio-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route to redirect unknown paths */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* 3. Shared Footer Component */}
          <Footer 
            studentName="Prince Akbari"
            email="24cs003@charusat.edu.in"
            github="github.com/24cs003-ship-it"
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
