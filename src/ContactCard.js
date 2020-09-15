import React, { useState } from 'react';
import './App.css'

export default function ContactCard(props) {
  const [showAge, setShowAge] = useState(false);
    return(
        <div className="contact-card" >
        <img src={props.avatarUrl} alt="profile"></img>
        <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Last Name: {props.lastName}</p>
        <small>Email: {props.email}</small>
        <button onClick={ ()=> setShowAge(!showAge)}>Show Age</button>
        {showAge && <small>Age: {props.age}</small>}
      </div>
    </div>
    )
} 