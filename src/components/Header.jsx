// Header component: Displays the portfolio title, student name, and specialization
function Header({ 
  name = "Prince Akbari", 
  title = "Student Developer Portfolio",
  badge = "AWDF Lab • Practical 2" 
}) {
  return (
    <header className="portfolio-header">
      <div className="header-top-row">
        <span className="live-pill">
          <span className="live-dot"></span> React Router & useState
        </span>
        <div className="header-badge">{badge}</div>
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
