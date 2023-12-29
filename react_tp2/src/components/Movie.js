import { FaTimes } from 'react-icons/fa';
import { GrEdit } from "react-icons/gr";
import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6"; // étoile vide, étoile pleine, demi étoile




const Movie = ({movie, onDelete}) => {
    const rating = movie.myRating ?? "Non défini";
    const favorite = movie.favorite ? "Oui" : "Non";
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={movie.id}
            >
                {movie.title}
            </th>
            <td class="px-6 py-4">{movie.year}</td>
            <td class="px-6 py-4">{movie.director}</td>
            <td class="px-6 py-4">{movie.genre.join(", ")}</td>
            <td class="px-6 py-4"><FaRegStar/></td>
            <td class="px-6 py-4">{favorite}</td>
            <td class="px-6 py-4 text-right">
                <GrEdit className="pointer text-blue-600 text-xl" />
            </td>
            <td class="px-6 py-4 text-right">
                <FaTimes className="pointer text-red text-xl" onClick={()=>onDelete(movie.id)}/>

            </td>
    </tr>
    )
}

export default Movie