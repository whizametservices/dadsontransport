'use client';
import React from 'react';

const ContactForm = () => {
  const handleForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result); // Optional: for debugging

      if (result.success) {
        event.target.reset(); // Clear the form
        window.location.href = '/thank-you'; // ✅ Direct redirect
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleForm} className="contact-form-validated contact-two__form">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="contact-two__input-box">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="contact-two__input-box">
            <input type="text" name="phone" placeholder="Phone Number" required />
          </div>
        </div>
        <div className="col-xl-12 col-lg-12">
          <div className="contact-two__input-box">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="contact-two__input-box">
            <textarea name="message" placeholder="How Can We Help?" required></textarea>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="contact-two__btn-box">
            <button type="submit" className="theme-btn btn-small mt-20">
             SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
