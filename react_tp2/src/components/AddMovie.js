import React, { useState, useEffect } from "react";
import RatingInput from "./RatingInput";

const AddMovie = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [director, setDirector] = useState("");
    const [genre, setGenre] = useState("");
    const [newRating, setNewRating] = useState(); // Nouvelle variable d'état pour la valeur du rating
    const [favorite, setFavorite] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const thisYear = new Date().getFullYear();

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

    // Fonction de rappel pour mettre à jour la valeur du rating
    const handleRatingChange = (newRating) => {
        if (newRating > 5 || newRating < 1) {
            alert("La note doit être comprise entre 1 et 5");
            return;
        }
        setNewRating(newRating);
    };

    const submitForm = (e) => {
        e.preventDefault();

        // Logique conditionnelle pour remplacer par "non renseigné" si vide
        const sanitizedYear = year || "N/D";
        const sanitizedDirector = director || "N/D";

        if (!title) {
            alert("Écrivez le titre du film au minimum");
        }
        if (year > thisYear) {
            alert("L'année ne peut pas être supérieure à l'année actuelle");
            return;
        }
        if (selectedOptions.length === 0) {
            alert("Sélectionnez au moins un genre");
            return;
        }
        onAdd({
            title,
            year: sanitizedYear,
            director: sanitizedDirector,
            genre,
            rating: newRating,
            favorite,
        });
        // Reinitalize the form
        setTitle("");
        setYear("");
        setDirector("");
        setGenre("");
        setNewRating("");
        setFavorite(false);
        setSelectedOptions([]);
    };

    return (
        <div className="max-w-[38%] mx-auto p-8 border-2 border-blue-700">
            <h1 className="uppercase text-lg text-center pb-5 text-white font-semibold bg-blue-700 p-4 w-full rounded-md mb-5">
                Saisir un nouveau film
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
                        Genre{" "}
                        <span className="text-xs">
                            (maintenez la touche Ctrl pour sélectionner
                            plusieurs genres)
                        </span>{" "}
                        :
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
                <RatingInput onRatingChange={handleRatingChange} />

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
                    onClick={submitForm}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Enregistrer
                </button>
            </form>
        </div>
    );
};

export default AddMovie;
