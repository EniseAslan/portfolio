import React from "react";

function Contact() {
  return (
    <div className="main">
      <div className="contactcard">
        <form>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              type="email"
              className="fieldmess"
              placeholder="Enter your message"
              required
            />
          </div>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
