import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Student information passed down as props
  const studentName = "Prince Akbari";
  const rollNumber = "24CS003";
  const branchName = "Computer Science & Engineering";
  const instituteName = "CSPIT";
  
  const studentBio = "I am a Computer Science & Engineering student at CSPIT, CHARUSAT, with a strong passion for Artificial Intelligence and Machine Learning. Enthusiastic about developing intelligent algorithms, modern web applications, and building data-driven software solutions.";

  const skillsData = [
    "AI & Machine Learning",
    "React.js",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Node.js Basics",
    "Vite Build Tool",
    "Git & GitHub"
  ];

  const studentProjects = [
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

  const studentEmail = "24cs003@charusat.edu.in";
  const studentGithub = "github.com/24cs003-ship-it";

  return (
    <div className="portfolio-app-wrapper">
      {/* Dynamic ambient glowing background orbs */}
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>
      <div className="ambient-blob blob-3"></div>

      <div className="portfolio-container">
        {/* 1. Header Component receiving 'name' prop */}
        <Header 
          name={studentName} 
          title="Student Developer Portfolio"
        />

        {/* Main Content Area */}
        <main className="portfolio-content">
          {/* 2. About Component displaying biography & student details */}
          <About 
            rollNo={rollNumber}
            branch={branchName}
            institute={instituteName}
            bio={studentBio}
            focus="AI & ML"
          />

          {/* 3. Skills Component receiving 'skillList' array prop */}
          <Skills 
            skillList={skillsData} 
          />

          {/* Projects Component displaying Prince's projects */}
          <Projects 
            projectList={studentProjects} 
          />
        </main>

        {/* 4. Footer Component */}
        <Footer 
          studentName={studentName}
          email={studentEmail}
          github={studentGithub}
        />
      </div>
    </div>
  );
}

export default App;
