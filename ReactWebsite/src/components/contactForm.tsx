import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name*</label>
        <input type="text" placeholder="Enter First Name" />

        <label htmlFor="lastName">Last Name*</label>
        <input type="text" placeholder="Enter Last Name" />

        <label htmlFor="email">Email*</label>
        <input type="email" placeholder="Enter Email" />

        <label htmlFor="phoneNumber">Phone Number*</label>
        <input type="email" placeholder="Enter Phone Number" />

        <label htmlFor="message">Enter your requests or inquiries</label>
        <textarea name="message" placeholder="Enter and requests or inquiries" />

        <div className="buttons">
            <button className="btn-primary">Reset</button>
            <button className="btn-primary">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;