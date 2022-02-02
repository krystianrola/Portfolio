import React, { useState } from "react";
import { MdMailOutline, MdEmail } from "react-icons/md";
import "./Contact.css";

function Contact({ data }) {
  let contactName, street, city, state, zip, phone, contactEmail, contactMessage;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    contactName = data.name;
    street = data.address.street;
    city = data.address.city;
    state = data.address.state;
    zip = data.address.zip;
    phone = data.phone;
    contactEmail = data.email;
    contactMessage = data.contactmessage;
  }

  const handleSubmitForm = () => {

  }

  return (
    <section className="contact" id="contact">
      <div className="contact_header_content">
        <MdMailOutline className="contact_icon" />
        <div className="contact_message">
          <p> {contactMessage} </p>
        </div>
      </div>

      <div className="contact_form_content">
        <div className="contact_form">
          <form onSubmit={handleSubmitForm}>
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input
                  type="text"
                  defaultValue=""
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input
                  type="email"
                  defaultValue=""
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                <input
                  type="text"
                  defaultValue=""
                  value={name}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  required
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                  required
                ></textarea>
              </div>

              <div>
                <button type="submit" className="btn_submit" disabled> Submit </button>
              </div>

            </fieldset>
          </form>
        </div>

        <aside className="contact_info_content">
          <div className="contact_info">
            <h4>Address and Phone</h4>
            <p className="address" id="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>

      </div>

    </section>
  );
}

export default Contact;
