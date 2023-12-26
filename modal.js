import React from 'react';
import './modal.css';
import Address from './address';
import Favorite from './Favorite';
import School from './school';
import Hobbies from './hobbies';

const Modal = ({ section, onClose, backgroundImage }) => {
  const sectionComponents = {
    'Address': <Address />,
    'Favorite': <Favorite />,
    'School': <School />,
    'Hobbies': <Hobbies />,
  };

  const modalStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {sectionComponents[section]}
      </div>
    </div>
  );
};

export default Modal;