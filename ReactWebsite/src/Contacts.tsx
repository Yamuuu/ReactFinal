import React from "react";
import Navbar from "./components/Navbar";
import ContactForm from './components/contactForm';

const Contact = () => {
  return (
    <div>
      <div className="body">
        <h1>Contacts</h1>
        <h3>We Squeak Success!</h3>

        <div className="Form">
          <ContactForm />
        </div>

        <h4>Have a mice day!</h4>
      </div>
    </div>
  );
};

export default Contact;