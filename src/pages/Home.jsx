import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';

// Home page: Introduces Prince Akbari, reuses Practical 1 components, and demonstrates useState
function Home() {
  // useState Interaction 1: Endorsements Counter
  const [endorsements, setEndorsements] = useState(42);
  const [hasEndorsed, setHasEndorsed] = useState(false);

  // useState Interaction 2: Interactive Focus Filter / Mode Toggle
  const [activeFocus, setActiveFocus] = useState('all');

  const skillsData = [
    "AI & Machine Learning",
    "React.js",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Node.js Basics",
    "Vite Build Tool",
    "Git & GitHub"
  ];

  const handleEndorseClick = () => {
    if (!hasEndorsed) {
      setEndorsements(prev => prev + 1);
      setHasEndorsed(true);
    }
  };

  return (
    <div className="page-container home-page">
      {/* 1. Reusable Header Component */}
      <Header 
        name="Prince Akbari" 
        title="Student Developer Portfolio"
        badge="AWDF Lab • Practical 2"
      />

      {/* Interactive useState Widget Card */}
      <section className="portfolio-card interactive-state-card">
        <div className="state-widget-header">
          <div className="widget-title-group">
            <span className="live-dot pulse-dot"></span>
            <span className="widget-badge">React useState Interaction</span>
          </div>
          <span className="state-tracker-tag">Current State: <strong>{activeFocus.toUpperCase()}</strong></span>
        </div>

        <p className="state-widget-desc">
          Test interactive state management: Select an academic focus track or endorse Prince&apos;s profile below.
        </p>

        <div className="state-controls-row">
          {/* Track Filter Buttons */}
          <div className="focus-toggle-group">
            <button 
              type="button" 
              className={`toggle-btn ${activeFocus === 'all' ? 'active-toggle' : ''}`}
              onClick={() => setActiveFocus('all')}
            >
              🌟 All Focus Areas
            </button>
            <button 
              type="button" 
              className={`toggle-btn ${activeFocus === 'ai' ? 'active-toggle' : ''}`}
              onClick={() => setActiveFocus('ai')}
            >
              🤖 AI & ML Track
            </button>
            <button 
              type="button" 
              className={`toggle-btn ${activeFocus === 'web' ? 'active-toggle' : ''}`}
              onClick={() => setActiveFocus('web')}
            >
              ⚡ Full-Stack Track
            </button>
          </div>

          {/* Endorsement Counter Button */}
          <button 
            type="button" 
            className={`endorse-btn ${hasEndorsed ? 'endorsed' : ''}`}
            onClick={handleEndorseClick}
          >
            <span className="endorse-icon">{hasEndorsed ? '🎉' : '👍'}</span>
            <span>{hasEndorsed ? 'Endorsed!' : 'Endorse Profile'}</span>
            <span className="endorse-count">{endorsements}</span>
          </button>
        </div>

        {/* Dynamic State Status Feedback */}
        <div className="state-feedback-box">
          {activeFocus === 'all' && (
            <p className="feedback-text">
              Displaying complete academic profile: Engineering student with dual competency in Artificial Intelligence and modern web frameworks.
            </p>
          )}
          {activeFocus === 'ai' && (
            <p className="feedback-text highlight-ai">
              🤖 <strong>AI & ML Focus Active:</strong> Specialized in supervised regression, predictive analytics, SwasthSetu AI triage, and data pipelines.
            </p>
          )}
          {activeFocus === 'web' && (
            <p className="feedback-text highlight-web">
              ⚡ <strong>Full-Stack Focus Active:</strong> Building component-driven single-page applications with React 19, Vite, state hooks, and client-side routing.
            </p>
          )}
        </div>
      </section>

      {/* 2. Reusable About Component */}
      <About 
        rollNo="24CS003"
        branch="Computer Science & Engineering"
        institute="CSPIT"
        focus={activeFocus === 'ai' ? "Artificial Intelligence" : activeFocus === 'web' ? "Full-Stack Development" : "AI & ML"}
      />

      {/* 3. Reusable Skills Component */}
      <Skills 
        skillList={skillsData} 
      />

      {/* Quick Route Navigation Callout */}
      <div className="home-quick-links">
        <Link to="/projects" className="cta-link-btn primary-cta">
          <span>Explore Featured Projects</span> →
        </Link>
        <Link to="/contact" className="cta-link-btn secondary-cta">
          <span>Get in Touch</span> ✉️
        </Link>
      </div>
    </div>
  );
}

export default Home;
