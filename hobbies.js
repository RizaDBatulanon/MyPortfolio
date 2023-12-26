import React from 'react';
import './hobbies.css'; // Import the corresponding CSS file

// Replace these paths with the actual paths to your images
import readingImage from '../Portfolio/pictures/Read.jpeg';
import WatchingImage from '../Portfolio/pictures/Movie.jpg';
import SleepingImage from '../Portfolio/pictures/Sleeping.jpeg';
import ListeningMusicImage from '../Portfolio/pictures/Music.jpeg';

const hobbiesData = [
  { name: 'Reading Books', image: readingImage },
  { name: 'Watching Movie', image: WatchingImage },
  { name: 'Sleeping', image: SleepingImage },
  { name: ' Music', image: ListeningMusicImage },
];

const Hobbies = ({backgroundImage}) => {
  return (
    <div className="hobbies-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Hobbies</h2>
      <div className="hobbies-list">
        {hobbiesData.map((hobby, index) => (
          <div key={index} className="hobby-item">
            <img src={hobby.image} alt={hobby.name} className="hobby-image" />
            <p>{hobby.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;