// ContactModal.js
import React from 'react';
import './contactmodal.css';

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Talk to Us</h2>
        <div className="form">
          <input type="email" placeholder="Enter your email" />
          <div className="name-inputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <label>
            <input type="checkbox" />
            Receive updates via email
          </label>
          <button>Contact Us</button>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactModal;
