import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+250 XXX XXX XXX',
      link: 'tel:+250XXXXXXXXX',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kigali, Rwanda',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/yourusername',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077b5',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/yourusername',
      color: '#1DA1F2',
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/yourusername',
      color: '#E4405F',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <div className="contact-content">
          {/* LEFT SIDE */}
          <div className="contact-info-section">
            <h3>Let's Connect</h3>
            <p className="info-description">
              I'm always interested in hearing about new opportunities,
              collaborations, or just having a conversation about technology.
            </p>

            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="info-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-details">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

         
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              {submitted && (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                  placeholder="Project Discussion"
                />
                {errors.subject && (
                  <span className="error-message">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <span className="btn-icon">→</span>
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <p>© 2025 Odile. Built with React ⚛️</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
