import React, { useState } from "react";
import emailjs from "emailjs-com";
import { X } from 'lucide-react';
import "../assets/styles/contact-popup.css";
import "../assets/styles/contact-animations.css";

export const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const templateParams = {
      name: formData.name,
      company: formData.company || null,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_7fd63b9", // Service ID
        "template_8aqoq0a", // Template ID
        templateParams,
        "H1IHW-mp6NDoe6BDv" // Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setShowSuccess(true);
          setFormData({ name: "", company: "", email: "", message: "" });
          setTimeout(() => {
            setShowSuccess(false);
            onClose();
          }, 2000);
        },
        (error) => {
          setIsSubmitting(false);
          setStatus("Error sending message, please try again.");
          console.error("Error sending:", error);
        }
      );
  };

  const handleClose = () => {
    setFormData({ name: "", company: "", email: "", message: "" });
    setStatus("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="contact-popup-overlay" onClick={handleClose}>
      <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
        <button 
          className="contact-popup-close" 
          onClick={handleClose}
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        
        <div className="contact-popup-content">
          <h2 className="contact-popup-title">Quote your project</h2>
          <p className="contact-popup-subtitle">Let's talk about how to revolutionize your business</p>
          
          <form onSubmit={handleSubmit} className="contact-popup-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                aria-label="Name"
              />
                             <input
                 type="text"
                 name="company"
                 placeholder="Your Company (optional)"
                 value={formData.company}
                 onChange={handleChange}
                 className="form-input"
                 aria-label="Company"
               />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              aria-label="Email"
            />

            <textarea
              name="message"
              placeholder="Tell us about your case"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="form-textarea"
              aria-label="Message"
            ></textarea>

            <button 
              type="submit" 
              className={`form-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              ) : (
                'Send Message'
              )}
            </button>

            {showSuccess && (
              <div className="success-notification">
                <div className="success-icon">✓</div>
                <p>Your message was sent successfully!</p>
              </div>
            )}

            {status && <p className="error-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
