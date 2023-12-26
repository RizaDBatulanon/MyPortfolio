import React from 'react';
import FavoriteDessertImage1 from '../Portfolio/pictures/Dessert.jpeg';
import FavoriteDessertImage2 from '../Portfolio/pictures/Dessert1.jpeg';
import FavoriteDessertImage3 from '../Portfolio/pictures/Dessert2.jpeg'; // Replace with the actual import for the third dessert image
import FavoriteDessertImage4 from '../Portfolio/pictures/Dessert3.jpeg';

const Favorite = ({ backgroundImage }) => {
  const favoriteDessertAddresses = [
    {
      label: 'Favorite Dessert 1',
      image: FavoriteDessertImage1, // Replace with the actual image import for the first dessert
      placeLabel: 'Mango Float', // Replace with the actual name of the first dessert
    },
    {
      label: 'Favorite Dessert 2',
      image: FavoriteDessertImage2, // Replace with the actual image import for the second dessert
      placeLabel: 'Fruit Salad', // Replace with the actual name of the second dessert
    },
    {
      label: 'Favorite Dessert 3',
      image: FavoriteDessertImage3, // Replace with the actual image import for the third dessert
      placeLabel: 'Tapioca Mango Salad', // Replace with the actual name of the third dessert
    },
    {
        label: 'Favorite Dessert 4',
        image: FavoriteDessertImage4, // Replace with the actual image import for the third dessert
        placeLabel: 'Ice Cream', // Replace with the actual name of the third dessert
    },
  ];

  return (
    <div className="favorite-desserts-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {favoriteDessertAddresses.map((favoriteDessert, index) => (
        <div key={index} className="favorite-dessert-item">
          <div className="label">{favoriteDessert.label}</div>
          <img src={favoriteDessert.image} alt={favoriteDessert.label} className="image" />
          <div className="label">{favoriteDessert.placeLabel}</div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;