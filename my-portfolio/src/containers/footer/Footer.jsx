import React from 'react';
import { FaEnvelope} from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

// styles
import '../../sass/style.scss'

const Footer = () => {
    const phoneNumber = '0737629343';
    const emailAddress = 'veronica@selenwall.se'; 

    return (
        <div className="contact__container">
            <div className="contact__info">
            <h3>Contact</h3>
            <h4>Let's have a cup of coffee and get to know each other?</h4>
            <p>I'm open for both remot jobs and working at your office.</p>
            </div>
            <div className="contact__alt">
                <p><FaPhone/><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
                <p><FaEnvelope/><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            </div>
        </div>
    )
}

export default Footer