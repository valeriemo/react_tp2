import {  FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6"; // étoile vide, étoile pleine, demi étoile

const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    console.log(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    // Ajoute les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
  
    // Ajoute une étoile demi-pleine si nécessaire
    if (hasHalfStar) {
      stars.push(<FaRegStarHalfStroke key="half" />);
    }
  
    // Remplit le reste avec des étoiles vides (si nécessaire)
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar  key={`empty-${i}`} className="text-gray-300" />);
    }
  
    return (
      <div>
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

    export default RatingStars;