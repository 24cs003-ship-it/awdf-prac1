// Header component: Displays the portfolio title, student name, and specialization
function Header({ name, title = "Student Portfolio" }) {
  return (
    <header className="portfolio-header">
      <div className="header-top-row">
        <span className="live-pill">
          <span className="live-dot"></span> Active Portfolio • React + Vite
        </span>
        <div className="header-badge">AWDF Lab • Practical 1</div>
      </div>

      <h1 className="header-title">
        <span className="gradient-text">{title}</span>
      </h1>
      
      <p className="header-subtitle">
        Welcome to the portfolio of <span className="highlight-name">{name}</span>
      </p>
      <p className="header-tagline">
        Computer Science & Engineering Student @ CSPIT | AI & ML Enthusiast
      </p>
    </header>
  );
}

export default Header;
