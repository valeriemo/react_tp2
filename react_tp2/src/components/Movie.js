import { FaTimes } from 'react-icons/fa';
import RatingStars from "../utilitaires/RatingStars";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

const Movie = ({movie, onDelete, onToggle, onEdit}) => {
    let rating = movie.myRating;
    if (rating === undefined) {
        rating = "Pas de note";
    } 
    const favorite = movie.favorite ? "Oui" : "Non";

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                {rating !== "Pas de note" && <RatingStars rating={rating} />}
                {rating === "Pas de note" && rating}
            </td>
            <td className="px-6 py-4" onDoubleClick={() => onToggle(movie.id)}>
                {favorite === "Oui" && <FaHeart className="text-red-600 text-xl"/>}
                {favorite === "Non" && <FaRegHeart className='pointer'/>}
            </td>
            <td className="px-6 py-4 text-right">
                <FaTimes className="pointer text-red text-xl" onClick={()=>onDelete(movie.id)}/>
            </td>
            <td className="px-6 py-4 text-right">
                <RiEdit2Fill  className="pointer text-red text-xl" onClick={()=>onEdit(movie.id)}/>
            </td>
    </tr>
    )
}

export default Movie