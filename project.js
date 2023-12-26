import React from 'react';

const Projects = ({ isVisible }) => {
  return isVisible ? (
    <section id="projects">
      <h2>Projects</h2>
      {/* Link to your GitHub repositories */}
      <a href="https://github.com/yourusername/" target="_blank" rel="noopener noreferrer"></a>
      <a href="https://github.com/yourusername/" target="_blank" rel="noopener noreferrer"></a>
      {/* Add more projects as needed */}
    </section>
  ) : null;
};

export default Projects;