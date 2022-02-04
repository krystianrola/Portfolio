import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import styles from "./Inspirations.module.css";

//#4B4B4C

function Inspirations({ data }) {

  let inspirations;

  if(data){
    inspirations = data.inspirations.map( inspiration => {
      return(
        <ProfilePicture imageURL={inspiration.image} name={inspiration.name}/>   
      )
    })
  }

  return (
    <div className={styles.inspirations_container}>
      <div className={styles.inspirations}>
        <h1> People That Inspire Me To Become Better At Web Development! </h1>
        <div className={styles.inspiration_content}> 
          {inspirations}
        </div>
      </div>
    </div>
  )
}

export default Inspirations;
