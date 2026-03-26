import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    email: "",
    cargoDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  // WhatsApp redirect function
  const handleWhatsAppClick = () => {
    const phoneNumber = "+917038831135";
    const message = encodeURIComponent(
      "Hello! I'm interested in your logistics services. I'd like to get more information about shipping and freight solutions.",
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name should only contain letters and spaces";
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = "Contact number is required";
    } else {
      const phoneRegex =
        /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3,4}$/;
      if (!phoneRegex.test(formData.contactNo.trim())) {
        newErrors.contactNo = "Please enter a valid phone number";
      } else {
        const digitsOnly = formData.contactNo.replace(/\D/g, "");
        if (digitsOnly.length < 10 || digitsOnly.length > 15) {
          newErrors.contactNo = "Phone number should be between 10-15 digits";
        }
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.cargoDetails.trim()) {
      newErrors.cargoDetails = "Cargo details or question is required";
    } else if (formData.cargoDetails.trim().length < 10) {
      newErrors.cargoDetails =
        "Please provide more details (minimum 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const SERVICE_ID = "service_wpxwkne";
        const TEMPLATE_ID = "template_royxc39";
        const PUBLIC_KEY = "KF2MiNvLMKbjNa6Lq";

        const templateParams = {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.contactNo,
          message: formData.cargoDetails,
          to_email: "waveslogi@gmail.com",
          reply_to: formData.email,
        };

        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY,
        );

        console.log("Email sent successfully:", response);
        setSubmitSuccess(true);

        setFormData({
          fullName: "",
          contactNo: "",
          email: "",
          cargoDetails: "",
        });

        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error("EmailJS error:", error);
        alert(
          "Failed to send message. Please try again or contact us directly.",
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background with subtle gradient */}
      <div className="contact-background">
        <div className="contact-overlay"></div>
      </div>

      {/* Decorative elements */}
      <div className="contact-blur-circle"></div>
      <div className="contact-blur-circle-2"></div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Content */}
          <div className="contact-left" ref={leftRef}>
            <div className="contact-content">
              <div className="contact-badge">
                <i className="fas fa-comments"></i> Get in Touch
              </div>
              <h2 className="contact-title">
                Ready to move your
                <br />
                <span className="contact-title-accent">business forward?</span>
              </h2>
              <p className="contact-description">
                Get a custom logistics plan from our experts. Quote within 24h.
              </p>

              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">Phone</span>
                    <span className="contact-info-value">+91 7038831135</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">Email</span>
                    <span className="contact-info-value">
                      waveslogi@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                {/* WhatsApp Icon - Added before LinkedIn */}
                <a
                  href="#"
                  className="contact-social-link whatsapp"
                  onClick={handleWhatsAppClick}
                  title="Chat with us on WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="contact-social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="contact-social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="contact-social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-right" ref={rightRef}>
            <div className="contact-form-card">
              {submitSuccess && (
                <div className="contact-success-message">
                  <i className="fas fa-check-circle"></i>
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={`contact-input ${errors.fullName ? "error" : ""}`}
                  />
                  {errors.fullName && (
                    <p className="contact-error">{errors.fullName}</p>
                  )}
                </div>

                <div className="contact-form-group">
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="Contact number"
                    className={`contact-input ${errors.contactNo ? "error" : ""}`}
                  />
                  {errors.contactNo && (
                    <p className="contact-error">{errors.contactNo}</p>
                  )}
                </div>

                <div className="contact-form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className={`contact-input ${errors.email ? "error" : ""}`}
                  />
                  {errors.email && (
                    <p className="contact-error">{errors.email}</p>
                  )}
                </div>

                <div className="contact-form-group">
                  <textarea
                    rows="4"
                    name="cargoDetails"
                    value={formData.cargoDetails}
                    onChange={handleChange}
                    placeholder="Cargo details or question"
                    className={`contact-textarea ${errors.cargoDetails ? "error" : ""}`}
                  ></textarea>
                  {errors.cargoDetails && (
                    <p className="contact-error">{errors.cargoDetails}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-button"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Request consultation
                      <i className="fas fa-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
