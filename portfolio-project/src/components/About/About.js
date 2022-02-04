import React from "react";
import "./About.css";
import { FiDownload } from "react-icons/fi";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

function About({ data }) {
  let name, profilepic, bio, phone, email, resumeDownload;

  if (data) {
    name = data.name;
    profilepic = "images/" + data.image;
    bio = data.bio;
    phone = data.phone;
    email = data.email;
    resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="about_content">
        <ProfilePicture imageURL={profilepic} name={"Krystian's profile pic"} />
        <div className="description_content">
          <h2> About Me </h2>
          <p className="discription"> {bio} </p>

          <div className="contact_content">
            <div className="contact_info">
              <h2> Contact Me </h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>{email}</span>
                <br />
                <span>{phone}</span>
                
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
