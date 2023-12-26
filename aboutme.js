import React from 'react';

const Me = ({ isVisible }) => {
  return isVisible ? (
    <section id="about">
      <h2>About Me</h2>
    </section>
  ) : null;
};

export default Me;