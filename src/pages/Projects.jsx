import { useState } from 'react';

// Projects page: Demonstrates clean card-based layout, category filtering, and expand/collapse with useState
function Projects() {
  // useState 1: Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // useState 2: Expandable project details state (tracks which card is expanded)
  const [expandedId, setExpandedId] = useState(null);

  const projectsData = [
    {
      id: "swasthsetu",
      title: "SwasthSetu-full",
      category: "AI & Healthcare",
      badge: "Healthcare AI • Full-Stack",
      status: "Active Deployment",
      description: "An AI-powered telemedicine and healthcare management platform designed to connect patients with medical specialists. Features automated symptom triage, digital consultation appointments, prescription management, and multilingual patient record access.",
      techStack: ["React.js", "Node.js", "FastAPI", "MongoDB", "WebRTC", "AI Triage"],
      details: "Includes real-time WebRTC video consultation channels, doctor queue management, and an automated heuristic symptom checker that ranks clinical urgency to streamline emergency triage."
    },
    {
      id: "salesprediction",
      title: "Sales Prediction",
      category: "Machine Learning",
      badge: "Machine Learning • Data Science",
      status: "Trained ML Model",
      description: "An end-to-end predictive machine learning model developed to forecast product sales, retail footfall, and seasonal demand using multivariate regression algorithms and time-series feature engineering.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "Matplotlib"],
      details: "Achieved an R² accuracy score of 94.2% across 10,000+ historical sales data points. Features automated promotional expenditure analysis and seasonal variance trend estimation."
    },
    {
      id: "campusportal",
      title: "Campus Intelligence Portal",
      category: "Full-Stack Web",
      badge: "Web Engineering • Education",
      status: "Campus Prototype",
      description: "A centralized academic resource management portal built for CSPIT CHARUSAT students. Automates lab assignment tracking, attendance forecasting, internal assessment calculations, and campus event schedules.",
      techStack: ["React.js", "Vite", "Express.js", "PostgreSQL", "CSS Modules", "REST APIs"],
      details: "Provides real-time attendance margin calculations to help students maintain minimum university attendance criteria, alongside interactive lab assignment submission workflows."
    }
  ];

  const categories = ["All", "AI & Healthcare", "Machine Learning", "Full-Stack Web"];

  // State-driven filtering
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="page-container projects-page">
      {/* Page Header */}
      <section className="portfolio-card page-intro-card">
        <div className="section-title-wrap">
          <span className="title-icon">🚀</span>
          <h2 className="section-title">Engineering Projects</h2>
        </div>
        <p className="page-intro-text">
          Explore featured software and machine learning projects developed by Prince Akbari. 
          Use the interactive category filter below to filter projects using React <code className="code-tag">useState</code>.
        </p>

        {/* Category Filter Tabs (useState Interaction) */}
        <div className="filter-bar">
          <span className="filter-label">Filter by Category:</span>
          <div className="filter-buttons-list">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${selectedCategory === cat ? 'active-filter' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
                {cat === 'All' && ` (${projectsData.length})`}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-status-info">
          <span>Active Filter: <strong>{selectedCategory}</strong></span>
          <span>Showing <strong>{filteredProjects.length}</strong> of {projectsData.length} Projects</span>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-category">{project.badge}</span>
                <span className="project-status-pill">{project.status}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Expandable Technical Details controlled via useState */}
              {isExpanded && (
                <div className="project-expanded-box">
                  <h4 className="expanded-heading">Technical Highlights & Architecture:</h4>
                  <p className="expanded-text">{project.details}</p>
                </div>
              )}

              {/* Technologies Badges */}
              <div className="project-tech-pills">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              {/* Show More / Show Less Button (useState) */}
              <div className="project-card-footer">
                <button
                  type="button"
                  className="expand-details-btn"
                  onClick={() => toggleExpand(project.id)}
                >
                  {isExpanded ? '▲ Hide Details' : '▼ View Architecture Details'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
