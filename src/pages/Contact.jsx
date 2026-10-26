import { useState } from 'react';

// Contact page: Contact form with controlled inputs and validation using React useState
function Contact() {
  // useState 1: Form input fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry / Academic Collaboration',
    message: ''
  });

  // useState 2: Validation errors state
  const [errors, setErrors] = useState({});

  // useState 3: Submission confirmation state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState(null);

  // Handle controlled input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents browser page reload
    
    if (validateForm()) {
      // Simulate successful local state processing without backend
      setSubmittedInfo({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
        timestamp: new Date().toLocaleTimeString()
      });
      setIsSubmitted(true);
    }
  };

  // Reset form to send another message
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Project Inquiry / Academic Collaboration',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedInfo(null);
  };

  return (
    <div className="page-container contact-page">
      {/* Page Header */}
      <section className="portfolio-card page-intro-card">
        <div className="section-title-wrap">
          <span className="title-icon">✉️</span>
          <h2 className="section-title">Get in Touch</h2>
        </div>
        <p className="page-intro-text">
          Have an inquiry, collaborative project, or feedback? Send a message through the controlled form below. 
          Managed entirely using React <code className="code-tag">useState</code> without full-page reloads.
        </p>
      </section>

      <div className="contact-layout-grid">
        {/* Contact Form Section */}
        <section className="portfolio-card contact-form-card">
          <h3 className="form-card-title">Send a Message</h3>

          {/* Success Feedback Banner on Submission */}
          {isSubmitted ? (
            <div className="submission-success-banner" role="alert">
              <div className="success-icon-wrap">✅</div>
              <h4 className="success-heading">Message Sent Successfully!</h4>
              <p className="success-sub">
                Thank you, <strong>{submittedInfo?.name}</strong>! Your message has been captured in component state at <em>{submittedInfo?.timestamp}</em>.
              </p>
              <div className="submitted-summary-box">
                <p><strong>From:</strong> {submittedInfo?.email}</p>
                <p><strong>Subject:</strong> {submittedInfo?.subject}</p>
                <p><strong>Message preview:</strong> &ldquo;{submittedInfo?.message}&rdquo;</p>
              </div>
              <button 
                type="button" 
                className="reset-form-btn"
                onClick={handleReset}
              >
                ← Send Another Message
              </button>
            </div>
          ) : (
            /* Interactive Controlled Form */
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., John Doe"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., john@example.com"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject title"
                  className="form-input"
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message or inquiry here..."
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                <span>Submit Message</span> 🚀
              </button>
            </form>
          )}
        </section>

        {/* Contact Info Sidebar */}
        <aside className="portfolio-card contact-info-sidebar">
          <h3 className="form-card-title">Student Information</h3>
          <p className="sidebar-sub">Direct academic and development channels:</p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <span className="contact-channel-icon">👤</span>
              <div className="contact-channel-body">
                <span className="channel-title">Student Name</span>
                <strong className="channel-value">Prince Akbari</strong>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-channel-icon">🆔</span>
              <div className="contact-channel-body">
                <span className="channel-title">Roll Number</span>
                <strong className="channel-value">24CS003</strong>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-channel-icon">🏛️</span>
              <div className="contact-channel-body">
                <span className="channel-title">Department & Institute</span>
                <strong className="channel-value">CSE, CSPIT (CHARUSAT)</strong>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-channel-icon">📧</span>
              <div className="contact-channel-body">
                <span className="channel-title">Academic Email</span>
                <a href="mailto:24cs003@charusat.edu.in" className="channel-link">
                  24cs003@charusat.edu.in
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-channel-icon">💻</span>
              <div className="contact-channel-body">
                <span className="channel-title">GitHub Portfolio</span>
                <a 
                  href="https://github.com/24cs003-ship-it" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="channel-link"
                >
                  github.com/24cs003-ship-it
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
