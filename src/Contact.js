import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">

      <h1 className="contact-title">
        Get In Touch
      </h1>


      <div className="contact-container">


        <div className="contact-info">


          {/* Email */}
          <div className="info-box">
            <FaEnvelope className="icon email-icon" />
            <p>
              anushayaaanushayaa@gmail.com
            </p>
          </div>



          {/* Phone */}
          <div className="info-box">
            <FaPhoneAlt className="icon phone-icon" />
            <p>
              +91 7598052826
            </p>
          </div>



          {/* Location */}
          <div className="info-box">
            <FaMapMarkerAlt className="icon location-icon" />
            <p>
              Kanyakumari, Tamil Nadu
            </p>
          </div>



        </div>



        <form className="contact-form">


          <input 
            type="text" 
            placeholder="Your Name" 
          />


          <input 
            type="email" 
            placeholder="Your Email" 
          />


          <textarea 
            rows="5" 
            placeholder="Your Message">
          </textarea>



          <button type="submit">
            Send Message
          </button>


        </form>


      </div>

    </section>
  );
};

export default Contact;