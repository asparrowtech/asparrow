import React from "react";
import "semantic-ui-css/semantic.min.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "asparrow_tech"
const TEMPLATE_ID = "template_7kxle9h"
const PUBLIC_KEY = "fihG_93J7EG7DWPAD"

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleOnSubmit}>
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Your Name*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              {/* <input
                name="text"
                type="select"
                placeholder="Service Type"
                required
              /> */}
              <select 
              name="text"
              style={{width:"100%",height:"60px",backgroundColor:"#f8f8f9",border:"1px solid #D4DCE0",outline:"0",padding:"0 25px",borderRadius:"2px",color: "var(--tp-common-black)",fontWeight:"400",fontSize:"18px"}}
              >
                <option>Web Development</option>
                <option>Mobile Development</option>
                <option>Sofware Development</option>
                <option>CRM Development</option>
                <option>CMS Development</option>
                <option>Digital Marketing</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="text"
                type="text"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Enter Your Message here"
              ></textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
