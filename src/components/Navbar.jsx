import { NavLink } from 'react-router-dom';

// Navbar component: Provides SPA navigation with active route highlighting using NavLink
function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="portfolio-navbar" aria-label="Main Navigation">
        <div className="nav-brand">
          <NavLink to="/" className="brand-link">
            <span className="brand-avatar">PA</span>
            <div className="brand-text">
              <span className="brand-name">Prince Akbari</span>
              <span className="brand-sub">AWDF Practical 2 • 24CS003</span>
            </div>
          </NavLink>
        </div>

        <div className="nav-links">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <span className="nav-icon">🏠</span> Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <span className="nav-icon">🚀</span> Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <span className="nav-icon">✉️</span> Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
