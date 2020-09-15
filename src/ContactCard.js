import React from 'react';
import './App.css'

export default function ContactCard() {
    return(
        <div className="contact-card" >
      <img src="https://via.placeholder.com/150" alt="profile-image"></img>
      <div className="user-details">
        <p>Name: Jenny Han</p>
        <p>Email: jenni.han@notreal.com</p>
        <p>Age: 25</p>
      </div>
    </div>
    )
} 