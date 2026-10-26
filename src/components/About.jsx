// About component: Displays student biography and academic badges
function About({ 
  bio = "I am a Computer Science & Engineering student at CSPIT, CHARUSAT, with a strong passion for Artificial Intelligence and Machine Learning. Enthusiastic about developing intelligent algorithms, modern web applications, and building data-driven software solutions.",
  rollNo = "24CS003",
  branch = "Computer Science & Engineering",
  institute = "CSPIT",
  focus = "AI & ML"
}) {
  const stats = [
    { label: "Branch", val: branch, icon: "🎓" },
    { label: "Institute", val: institute, icon: "🏛️" },
    { label: "Roll No", val: rollNo, icon: "🆔" },
    { label: "Core Focus", val: focus, icon: "🤖" },
  ];

  return (
    <section className="portfolio-card about-section">
      <div className="section-title-wrap">
        <span className="title-icon">👨‍💻</span>
        <h2 className="section-title">About Me</h2>
      </div>
      <p className="bio-text">{bio}</p>
      
      <div className="stat-cards-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <span className="stat-icon">{stat.icon}</span>
            <div className="stat-content">
              <span className="stat-label">{stat.label}</span>
              <strong className="stat-val">{stat.val}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
