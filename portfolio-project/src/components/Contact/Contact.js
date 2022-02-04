import React, { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import "./Contact.css";
import { child, get, getDatabase, ref } from "firebase/database";
import firebaseApp from "../../firebase";
import { send } from 'emailjs-com';

function Contact({ data }) {
  let contactName, contactEmail, contactMessage;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    contactName = data.name;
    contactEmail = data.email;
    contactMessage = data.contactmessage;
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    let service_id, template_id, user_id

    await get(child(ref(getDatabase(firebaseApp)), 'gmail')) 
    .then(snapchot => {
      if(snapchot.exists()){
        service_id = snapchot.val().service;
        template_id = snapchot.val().template;
        user_id = snapchot.val().user;
      }else {
        console.log("No Data Avaiable.")
      }
    })
    .catch(err => console.log(err));

    send(
      service_id,
      template_id,
      {
        from_name: name,
        message: message,
        subject: subject,
        reply_to: email,
      },
      user_id
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err.status);
    });
       
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
                  value={subject}
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
                <button type="submit" className="btn_submit"> Submit </button>
              </div>
          </form>
        </div>

        <aside className="contact_info_content">
          <div className="contact_info">
            <h4>Contact Information</h4>
            <p className="address" id="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
            </p>
          </div>
        </aside>

      </div>

    </section>
  );
}

export default Contact;
