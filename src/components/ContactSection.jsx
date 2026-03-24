import { useState } from "react";
import emailjs from "@emailjs/browser";

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

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name should only contain letters and spaces";
    }

    // Contact Number validation
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

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Cargo Details validation
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
    // Clear error for this field when user starts typing
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
        // EmailJS configuration
        // Replace these with your actual EmailJS credentials
        const SERVICE_ID = "service_wpxwkne"; // Get from EmailJS dashboard
        const TEMPLATE_ID = "template_royxc39"; // Get from EmailJS dashboard
        const PUBLIC_KEY = "KF2MiNvLMKbjNa6Lq"; // Get from EmailJS dashboard

        // Prepare template parameters
        const templateParams = {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.contactNo,
          message: formData.cargoDetails,
          to_email: "your-email@example.com", // Your email address where you want to receive submissions
          reply_to: formData.email,
        };

        // Send email using EmailJS
        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY,
        );

        console.log("Email sent successfully:", response);
        setSubmitSuccess(true);

        // Reset form
        setFormData({
          fullName: "",
          contactNo: "",
          email: "",
          cargoDetails: "",
        });

        // Clear success message after 5 seconds
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
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Ready to move your business forward?
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Get a custom logistics plan from our experts. Quote within 24h.
            </p>
            <div className="flex gap-5 flex-wrap mb-6">
              <div>
                <i className="fas fa-phone-alt text-accent mr-2"></i> +1 (888)
                937-8374
              </div>
              <div>
                <i className="fas fa-envelope text-accent mr-2"></i>{" "}
                hello@waveslogistics.com
              </div>
            </div>
            <div className="flex gap-4">
              <i className="fab fa-linkedin-in text-2xl hover:text-accent transition cursor-pointer"></i>
              <i className="fab fa-twitter text-2xl hover:text-accent transition cursor-pointer"></i>
              <i className="fab fa-facebook-f text-2xl hover:text-accent transition cursor-pointer"></i>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            {submitSuccess && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-xl text-green-200 text-center">
                ✓ Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className={`w-full bg-transparent border rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-accent transition ${
                    errors.fullName ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Contact number"
                  className={`w-full bg-transparent border rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-accent transition ${
                    errors.contactNo ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.contactNo && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.contactNo}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className={`w-full bg-transparent border rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-accent transition ${
                    errors.email ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  rows="4"
                  name="cargoDetails"
                  value={formData.cargoDetails}
                  onChange={handleChange}
                  placeholder="Cargo details or question"
                  className={`w-full bg-transparent border rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:border-accent transition ${
                    errors.cargoDetails ? "border-red-500" : "border-white/30"
                  }`}
                ></textarea>
                {errors.cargoDetails && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.cargoDetails}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent-dark text-gray-900 font-bold py-3 px-6 rounded-xl transition w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request consultation →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
