import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Simulate send
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info glass-card">
            <h3>Contact Information</h3>
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="info-item">
              <span className="icon">📧</span>
              <a href="mailto:masengeshoodile@gmail.com">masengeshoodile@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <a href="tel:+250780283130">+250 780 283 130</a>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <span>Kigali, Rwanda</span>
            </div>

            <div className="social-links-footer">
              <a href="https://github.com/OdileMas" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className={`btn btn-primary ${status === 'sending' ? 'loading' : ''}`}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
            {status === 'error' && <p className="error-msg">Please fill in all fields.</p>}
          </form>
        </div>

        <div className="footer-cr">
          <p>© 2025 Odile Mas. Built with React & Love.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
