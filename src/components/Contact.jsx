import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    // EmailJS configuration
    // IMPORTANT: templateID should be different from serviceID
    // Get your templateID from EmailJS dashboard → Email Templates
    const serviceID = 'service_aksuzcn';
    const templateID = 'template_kg5zs3q'; // ⚠️ REPLACE THIS with your actual template ID
    const publicKey = '1pK3k2MhIdISV7V8m';

    // Email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'aniketkapale2002@gmail.com', // Your email
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error Code:', error.code);
      console.error('Error Text:', error.text);
      console.error('Service ID:', serviceID);
      console.error('Template ID:', templateID);
      
      // More specific error messages
      let errorMessage = 'Failed to send message. ';
      if (error.text) {
        if (error.text.includes('template')) {
          errorMessage += 'Template ID is incorrect. Please check your EmailJS template ID.';
        } else if (error.text.includes('service')) {
          errorMessage += 'Service ID is incorrect. Please check your EmailJS service ID.';
        } else if (error.text.includes('key')) {
          errorMessage += 'Public key is incorrect. Please check your EmailJS public key.';
        } else {
          errorMessage += error.text;
        }
      } else {
        errorMessage += 'Please try again or email me directly at aniketkapale2002@gmail.com';
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:aniketkapale2002@gmail.com">aniketkapale2002@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:8805286613">8805286613</a>
              </div>
            </div>
            <div className="contact-social">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type}`}>
                <i className={`fas ${submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                <span>{submitStatus.message}</span>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                disabled={isLoading}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
