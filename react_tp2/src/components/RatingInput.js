// Votre composant de formulaire
import React, { useState } from 'react';
import StarIcon from './StarIcon';

const RatingInput = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="flex items-center mb-5">
      <p className="mr-2 text-white">Note sur 5 :</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          selected={star <= rating}
          onSelect={() => {
            handleStarClick(star)
            onRatingChange(star)}}
        />
      ))}
      <span className="ml-2 text-white">{rating}/5</span>
    </div>
  );
};

export default RatingInput;
