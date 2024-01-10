import React, { useState, useEffect } from "react";
import RatingInput from "./RatingInput";
import Button from "./Button";
import FavoriteCheckbox from "./FavoriteCheckbox";
import { ToastContainer, toast } from "react-toastify";

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

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteChange = () => {
        // Mettre à jour l'état lorsque la boîte est cochée ou décochée
        setIsFavorite(!isFavorite);
        setFavorite(!favorite);
    };

    const toastAlert = (text) => {
        if (text === "Film ajouté avec succès !") {
            toast.success(text, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error(text, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };
    const submitForm = (e) => {
        e.preventDefault();
        // Logique conditionnelle pour remplacer par "non renseigné" si vide
        const sanitizedYear = year || "N/D";
        const sanitizedDirector = director || "N/D";

        if (!title) {
            toastAlert("Écrivez le titre du film au minimum");
        }
        if (year > thisYear) {
            toastAlert(
                "L'année ne peut pas être supérieure à l'année actuelle"
            );
            return;
        } else if (year !== "" && !/^\d+$/.test(year)) {
            toastAlert("L'année doit être un nombre");
            return;
        }

        if (selectedOptions.length === 0) {
            toastAlert("Sélectionnez au moins un genre");
            return;
        }
        onAdd({
            title,
            year: sanitizedYear,
            director: sanitizedDirector,
            genre,
            myRating: newRating,
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
        toastAlert("Film ajouté avec succès !");
    };

    return (
        <div className="max-w-[38%] min-w-[30%] mx-auto p-8 border-2 border-[#5889c1] rounded-md">
            <h1 className="uppercase text-lg text-center text-white font-semibold bg-[#5889c1] p-4 w-full rounded-md mb-5">
                Saisir un nouveau film
            </h1>
            <form className="max-w-md mx-auto" onSubmit={submitForm}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="title"
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
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
                        className="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
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
                        className="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                        placeholder="Directeur"
                        onChange={(e) => setDirector(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="multipleOptions"
                        className="text-sm font-medium text-gray-300"
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
                        className="w-full text-xs mt-1 p-2 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-[#5889c1] ring-offset-gray-800 focus:ring-offset-gray-800"
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
                    <FavoriteCheckbox
                        isChecked={isFavorite}
                        onChange={handleFavoriteChange}
                    />
                </div>
                <Button
                    type="submit"
                    text="Enregistrer"
                    onClick={submitForm}
                    btnStyle={"btn-1"}
                />
            </form>
        </div>
    );
};

export default AddMovie;
