import React from 'react';
import './contact.css';
import BackgroundImage from '../Portfolio/pictures/Background.jpg'; // Import the background image
import GmailIcon from '../Portfolio/pictures/Gmail-Logo.png';
import PhoneIcon from '../Portfolio/pictures/Phone.png';
import FacebookIcon from '../Portfolio/pictures/Facebook.jpeg';
import InstagramIcon from '../Portfolio/pictures/Instagram.jpeg';

const iconStyle = {
  width: '24px', // Adjust the width as needed
  height: '24px', // Adjust the height as needed
};

const Contact = () => {
  return (
    <div className="contact-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="contact-details">
        
        <ul>
          <li>
            <img src={PhoneIcon} alt="Phone Icon" style={iconStyle} />
            <span>Phone Number: </span>
            <a href="cell #:09508220340">09508220340</a>
          </li>
          <li>
            <img src={GmailIcon} alt="Email Icon" style={iconStyle} />
            <span>Email: </span>
            <a href="rizabatulanon7@gmail.com">rizabatulanon7@gmail.com</a>
          </li>
          <li>
            <img src={FacebookIcon} alt="Facebook Icon" style={iconStyle} />
            <span>Facebook: </span>
            <a href="https://web.facebook.com/riza.batulanon/" target="_blank" rel="noopener noreferrer">
              Riza Dogoy Batulanon
            </a>
          </li>
          <li>
            <img src={InstagramIcon} alt="Instagram Icon" style={iconStyle} />
            <span>Instagram: </span>
            <a href="https://www.instagram.com/riza081120/</li>" target="_blank" rel="noopener noreferrer">
              Riza Dogoy Batulanon
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;