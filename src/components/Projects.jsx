// Projects component: Displays information about Prince's projects (SwasthSetu-full and Sales Prediction)
function Projects({ projectList = [] }) {
  const defaultProjects = [
    {
      title: "SwasthSetu-full",
      badge: "Healthcare AI • Full-Stack",
      status: "Active Project",
      description: "An AI-powered telemedicine and healthcare management platform that bridges patients and doctors. Features intelligent preliminary symptom analysis, online appointment booking, digital prescriptions, and patient records.",
      techStack: ["React.js", "Node.js", "FastAPI", "MongoDB", "WebRTC", "AI Triage"]
    },
    {
      title: "Sales Prediction",
      badge: "Machine Learning • Data Science",
      status: "ML Model",
      description: "A machine learning predictive model developed to forecast future product sales and consumer demand based on historical advertising data, seasonal patterns, and store footfall using regression techniques.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "Matplotlib"]
    }
  ];

  const projectsToDisplay = projectList.length > 0 ? projectList : defaultProjects;

  return (
    <section className="portfolio-card projects-section">
      <div className="section-title-wrap">
        <span className="title-icon">🚀</span>
        <h2 className="section-title">Projects</h2>
      </div>
      <p className="skills-subtitle">Key engineering and machine learning projects developed by Prince:</p>

      <div className="projects-grid">
        {projectsToDisplay.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-header">
              <span className="project-category">{project.badge}</span>
              <span className="project-status-pill">{project.status}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech-pills">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
