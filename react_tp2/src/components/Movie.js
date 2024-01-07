import { FaTimes } from 'react-icons/fa';
import RatingStars from "./RatingStars";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

const Movie = ({movie, onDelete, onToggle, onEdit}) => {
    let rating = movie.myRating;
    if (rating === undefined || rating === 0) {
        rating = "Pas de note";
    }
    const favorite = movie.favorite ? "Oui" : "Non";
    
    return (
        <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" 
            >
                {movie.title}
            </th>
            <td className="px-6 py-4">{movie.year}</td>
            <td className="px-6 py-4">{movie.director}</td>
            <td className="px-6 py-4">{movie.genre}</td>
            <td className="px-6 py-4">
                { rating !== "Pas de note" ? <RatingStars rating={rating} /> : rating }
            </td>
            <td className="px-6 py-4" onDoubleClick={() => onToggle(movie.id)}>
                {favorite === "Oui" && <FaHeart className="text-[#e9295c] text-xl cursor-pointer"/>}
                {favorite === "Non" && <FaRegHeart className='cursor-pointer'/>}
            </td>
            <td className="px-6 py-4 text-right">
                <FaTimes className="cursor-pointer text-xl hover:text-[#ff7900] " onClick={()=>onDelete(movie.id)}/>
            </td>
            <td className="px-6 py-4 text-right">
                <RiEdit2Fill  className="cursor-pointer text-xl hover:text-[#BAFF29]" onClick={()=>onEdit(movie)}/>
            </td>
    </tr>
    )
}

export default Movie