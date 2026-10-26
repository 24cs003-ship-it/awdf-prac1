// Footer component: Displays contact information and copyright details
function Footer({ 
  email = "24cs003@charusat.edu.in", 
  github = "github.com/24cs003-ship-it",
  studentName = "Prince Akbari" 
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-contact">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <span><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">💻</span>
          <span><strong>GitHub:</strong> <a href={`https://${github}`} target="_blank" rel="noreferrer">{github}</a></span>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {currentYear} {studentName}. All rights reserved. • AWDF Lab Practical 1
        </p>
      </div>
    </footer>
  );
}

export default Footer;
