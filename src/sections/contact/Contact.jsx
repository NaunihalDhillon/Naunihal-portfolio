import "./contact.css";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qsohroy",
        "template_rr795rn",
        form.current,
        "FhA4gtVmCaPG6_6rC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="contact_container top">
        <div className="heading text-center">
          <h3>Contact</h3>
        </div>

        <div className="contact_content d_flex">
          <div className="left">
            <div class="contact-info">
              <div className="sub_heading">
                <h3>Let's Connect</h3>
                <p class="text-muted mb-0">
                  Looking for help? Please get in touch with me using the form
                </p>
              </div>
              <hr />

              <div className="info_content">
                <h6>Phone :</h6>
                <div className="contact_icon d_flex">
                  <div className="icon">
                    <BiPhone />
                  </div>
                  <div className="icon-content">
                    <p>+91 9716613803</p>
                  </div>
                </div>
              </div>

              <div className="info_content">
                <h6>Email Me :</h6>
                <div className="contact_icon d_flex">
                  <div className="icon">
                    <AiOutlineMail />
                  </div>
                  <div className="icon-content">
                    <p>naunihal.dhillon1@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="right">
            <div className="custom_form">
              <form ref={form} onSubmit={sendEmail}>
                <h4 className="text-muted">Let's Talk</h4>

                <div className="form-group">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control contact-form"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control contact-form"
                    placeholder="Your email"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control contact-form"
                    id="subject"
                    placeholder="Your Subject.."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
