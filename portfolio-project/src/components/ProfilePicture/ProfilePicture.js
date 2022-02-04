import React from 'react';
import styles from "./ProfilePicture.module.css";

function ProfilePicture({ imageURL, name }) {
  return (
    <div className={styles.profile_pic_content}>
        <img
            src={imageURL}
            alt={name}
            className={styles.profile_pic}
        />
  </div>
  )
}

export default ProfilePicture;
