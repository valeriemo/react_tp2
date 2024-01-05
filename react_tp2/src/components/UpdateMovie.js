import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateMovie = (movieData,onAdd) => {
    console.log(movieData);

    const [title, setTitle] = useState(movieData.title);
    const [year, setYear] = useState(movieData.year);
    const [director, setDirector] = useState(movieData.director);
    const [genre, setGenre] = useState(movieData.genre);
    const [rating, setRating] = useState(movieData.myRating);
    const [favorite, setFavorite] = useState(movieData.favorite);
    const [selectedOptions, setSelectedOptions] = useState([movieData.genre]);
    const thisYear = new Date().getFullYear();
    //const {id} = useParams();
    const id = movieData.id;

    const submitForm = (e) => {
        e.preventDefault();
        const updatedMovieData = {
          title,
          year,
          director,
          genre: selectedOptions.join(", "),
          myRating: rating,
          favorite,
        };
        // Appeler la fonction de mise à jour du film
        onAdd(updatedMovieData);
    };

    const handleSelectChange = (e) => {
        const selectedValues = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        if (selectedValues.length === 0) {
            alert("Sélectionnez au moins un genre");
            return;
        }
        setSelectedOptions(selectedValues);
        setGenre(selectedValues.join(", "));
    };





    return ( 
        // TODO: Faire une boite modal pour le formulaire avec gradient background
         <div >
             <h1 className="text-lg text-center pb-5 text-white font-semibold">
                 Modifier un film
             </h1>
             <form className="max-w-md mx-auto" onSubmit={submitForm}>
                 <div className="relative z-0 w-full mb-5 group">
                     <input
                         type="text"
                         name="title"
                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                         placeholder="Titre"
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                         required
                     />
                 </div>
                 <div className="relative z-0 w-full mb-5 group">
                     <input
                         type="text"
                         name="year"
                         value={year}
                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                         placeholder="Année"
                         max={thisYear}
                         onChange={(e) => setYear(e.target.value)}
                     />
                 </div>
                 <div className="relative z-0 w-full mb-5 group">
                     <input
                         type="text"
                         name="director"
                         value={director}
                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                         placeholder="Directeur"
                         onChange={(e) => setDirector(e.target.value)}
                     />
                 </div>
 
                 <div className="mb-5">
                     <label
                         htmlFor="multipleOptions"
                         className="text-sm font-medium text-gray-900 dark:text-gray-300"
                     >
                         Genre <span className="text-xs">(maintenez la touche Ctrl pour sélectionner plusieurs genres)</span> :
                     </label>
                     <select
                         id="multipleOptions"
                         name="multipleOptions"
                         multiple
                         className="w-full text-xs mt-1 p-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                         onChange={handleSelectChange}
                         value={selectedOptions}
                     >
                         <option value="Drame">Drame</option>
                         <option value="Comédie">Comédie</option>
                         <option value="Science-fiction">Science-fiction</option>
                         <option value="Horreur">Horreur</option>
                         <option value="Action">Action</option>
                         <option value="Aventure">Aventure</option>
                         <option value="Thriller">Thriller</option>
                         <option value="Policier">Policier</option>
                         <option value="Fantastique">Fantastique</option>
                         <option value="Animation">Animation</option>
                         <option value="Famille">Famille</option>
                     </select>
                 </div>
 
                 <div className="relative z-0 w-full mb-5 group">
                     <input
                         type="text"
                         name="myRating"
                         value={rating}
                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                         placeholder="Note sur 5"
                         onChange={(e) => setRating(e.target.value)}
                         max={5}
                         min={1}
                     />
                 </div>
                 <div className="flex items-start mb-5">
                     <div className="flex items-center h-5">
                         <input
                             value={favorite}
                             id="favorite"
                             type="checkbox"
                             onChange={(e) =>
                                 setFavorite(e.currentTarget.checked)
                             }
                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                         />
                     </div>
                     <label
                         htmlFor="favorite"
                         className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                     >
                         Mettre dans ses coups de coeurs
                     </label>
                 </div>
                 <button
                     type="submit"
                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     value='Enregistrer les modifications'
                 >
                     Enregistrer
                 </button>
             </form>
         </div>
     );
};

export default UpdateMovie;