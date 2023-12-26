import React, { useState } from 'react';
import Modal from './modal';
import './about.css';

// Import the components for each section
import Address from './address';
import Hobbies from './hobbies';
import School from './school';
import Favorite from '/Favorite';

import AddressImage from '../Portfolio/pictures/Background.jpg';
import HobbiesImage from '../Portfolio/pictures/Background.jpg';
import SchoolImage from '../Portfolio/pictures/Background.jpg';
import FavoriteImage from '../Portfolio/pictures/Dessert.jpeg';
import MyPic from '../Portfolio/pictures/Riza.jpg';
import AboutBackgroundImage from '../Portfolio/pictures/Riza.jpg'; // Import the background image

const sectionComponents = {
  'Address': { component: <Address />, backgroundImage: AddressImage },
  'Hobbies': { component: <Hobbies />, backgroundImage: HobbiesImage },
  'School': { component: <School />, backgroundImage: SchoolImage },
  'Favorite': { component: <Favorite />, backgroundImage: FavoriteImage },
};

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  const openModal = (section) => {
    setSelectedSection(section);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="about-container" style={{ backgroundImage: `url(${AboutBackgroundImage})` }}>
      <img src={MyPic} alt="My Picture" className="profile-image" />
      <h1>Riza Dogoy Batulanon</h1>

      <div className="buttons-container">
        {/* Buttons for each section */}
        {Object.keys(sectionComponents).map((section) => (
          <button key={section} onClick={() => openModal(section)}>
            {section}
          </button>
        ))}
      </div>

      {/* Render the selected section component in the modal */}
      {showModal && selectedSection && sectionComponents[selectedSection] && (
        <Modal
          section={selectedSection}
          onClose={closeModal}
          backgroundImage={sectionComponents[selectedSection].backgroundImage}
        >
          {sectionComponents[selectedSection].component}
        </Modal>
      )}
    </div>
  );
};

export default About;