import {  FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6"; // étoile vide, étoile pleine, demi étoile

const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    // Ajoute les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-200" />);
    }
  
    // Ajoute une étoile demi-pleine si nécessaire
    if (hasHalfStar) {
      stars.push(<FaRegStarHalfStroke key="half" className="text-yellow-200" />);
    }
  
    // Remplit le reste avec des étoiles vides (si nécessaire)
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar  key={`empty-${i}`} className="text-yellow-200" />);
    }
  
    return (
      <div className="flex">
        {stars}
      </div>
    );
  };


  export default RatingStars;