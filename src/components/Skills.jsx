// Skills component: Dynamically renders skills from the skillList array prop using .map()
function Skills({ skillList = [] }) {
  // Map icons to popular skills for extra visual flair
  const getSkillIcon = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('ai') || lower.includes('learning')) return '🧠';
    if (lower.includes('react')) return '⚛️';
    if (lower.includes('javascript') || lower.includes('js')) return '⚡';
    if (lower.includes('html') || lower.includes('css')) return '🎨';
    if (lower.includes('node')) return '🟢';
    if (lower.includes('vite')) return '⚡';
    if (lower.includes('git')) return '🐙';
    return '💻';
  };

  return (
    <section className="portfolio-card skills-section">
      <div className="section-title-wrap">
        <span className="title-icon">⚡</span>
        <h2 className="section-title">Technical Expertise</h2>
      </div>
      <p className="skills-subtitle">Core stack and framework proficiency:</p>
      
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-chip">
            <span className="skill-icon">{getSkillIcon(skill)}</span>
            <span className="skill-text">{skill}</span>
            <span className="skill-glow"></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
