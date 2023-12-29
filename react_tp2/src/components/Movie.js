import { FaTimes } from 'react-icons/fa';
import { GrEdit } from "react-icons/gr";
import RatingStars from "../utilitaires/RatingStars";


const Movie = ({movie, onDelete}) => {
    let rating = movie.myRating;
    if (rating === undefined) {
        rating = "Pas de note";
    } 
    const favorite = movie.favorite ? "Oui" : "Non";

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={movie.id}
            >
                {movie.title}
            </th>
            <td className="px-6 py-4">{movie.year}</td>
            <td className="px-6 py-4">{movie.director}</td>
            <td className="px-6 py-4">{movie.genre.join(", ")}</td>
            <td className="px-6 py-4">
                {rating !== "Pas de note" && <RatingStars rating={rating} />}
                {rating === "Pas de note" && rating}
            </td>
            <td className="px-6 py-4">{favorite}</td>
            <td className="px-6 py-4 text-right">
                <GrEdit className="pointer text-blue-600 text-xl" />
            </td>
            <td className="px-6 py-4 text-right">
                <FaTimes className="pointer text-red text-xl" onClick={()=>onDelete(movie.id)}/>
            </td>
    </tr>
    )
}

export default Movie