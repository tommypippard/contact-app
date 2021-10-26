import React from 'react'
import './App.css'
import User from '../images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
            <img className="avatar" src={User} alt="user"/>
        <div className="content">
            <div className="header">{name}</div>
            <div className="email">{email}</div>
        <button className="delete-contact" onClick={() => props.clickHandler(id)}>DELETE CONTACT</button>
        </div>
    </div>
    );
}

export default ContactCard;