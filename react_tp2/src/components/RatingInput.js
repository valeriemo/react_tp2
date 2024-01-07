// Votre composant de formulaire
import React, { useState, useEffect } from "react";
import StarIcon from "./StarIcon";

const RatingInput = ({ onRatingChange, initialRating }) => {

    const [rating, setRating] = useState(initialRating || 0);

    useEffect(() => {
    }, [initialRating]);


    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className="flex items-center mb-5">
            <p className="mr-2 text-white">Note sur 5 :</p>
            {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                    className="cursor-pointer text-[#ffd500]"
                    key={star}
                    selected={star <= rating}
                    onSelect={() => {
                        handleStarClick(star);
                        onRatingChange(star);
                    }}
                />
            ))}
            <span className="ml-2 text-white">{rating}/5</span>
        </div>
    );
};

export default RatingInput;
