import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "de.duval6@gmail.com",
      link: "mailto:de.duval6@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "(702) 764-0921",
      link: "tel:+17027640921",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "David Duval",
      link: "https://www.linkedin.com/in/david-duval-6a0b77184/",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Las Vegas, NV",
      link: null,
    },
  ];

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header fade-in">
          <h1>Get In Touch</h1>
          <p className="subtitle">Let's connect and discuss opportunities</p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-delay">
            <h2>Contact Information</h2>
            <p>
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind, want to discuss potential
              freelance work, or just want to connect, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="contact-item fade-in-delay"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <h3>Availability</h3>
              <p>
                I'm currently available for freelance opportunities and
                collaborations. I'm particularly interested in projects that
                involve React, TypeScript, and modern web development
                technologies.
              </p>
            </div>
          </div>

          <div className="contact-form fade-in-delay">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer fade-in-delay">
          <h2>Let's Work Together</h2>
          <p>
            I'm passionate about creating innovative software solutions and
            would love to discuss how I can contribute to your next project.
            Whether it's freelance work or collaboration, I'm excited to explore
            opportunities that align with my skills and interests.
          </p>

          <div className="cta-buttons">
            <a href="mailto:de.duval6@gmail.com" className="cta-btn primary">
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/david-duval-6a0b77184/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
