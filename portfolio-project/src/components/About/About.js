import React from "react";
import "./About.css";
import { FiDownload } from "react-icons/fi";

function About({ data }) {
  let name, profilepic, bio, street, city, state, zip, phone, email, resumeDownload;

  if (data) {
    name = data.name;
    profilepic = "images/" + data.image;
    bio = data.bio;
    street = data.address.street;
    city = data.address.city;
    state = data.address.state;
    zip = data.address.zip;
    phone = data.phone;
    email = data.email;
    resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="about_content">
        <div className="profile_pic_content">
          <img
            src={profilepic}
            alt="Krystian's profile pic"
            className="profile_pic"
          />
        </div>
        <div className="description_content">
          <h2> About Me </h2>
          <p className="discription"> {bio} </p>

          <div className="contact_content">
            <div className="contact_info">
              <h2> Contact Me </h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="download_content">
              <p>
                <a href={resumeDownload} className="btn_download">
                  <FiDownload className="btn_icon"/> Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
