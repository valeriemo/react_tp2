import Movie from "./Movie";
import UpdateMovie from "./UpdateMovie";
import AddMovie from "./AddMovie";
import Header from "./Header";
import { useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "The Shawshank Redemption",
            year: 1994,
            director: "Frank Darabont",
            genre: "Crime, Drama",
            myRating: 3,
            favorite: false,
        },
        {
            id: 2,
            title: "The Godfather",
            year: 1972,
            director: "Francis Ford Coppola",
            genre: "Crime Drama",
            myRating: 4.5,
            favorite: false,
        },
        {
            id: 3,
            title: "The Godfather: Part II",
            year: 1974,
            director: "Francis Ford Coppola",
            genre: "Crime, Drama",
            myRating: 3,
            favorite: false,
        },
        {
            id: 4,
            title: "The Dark Knight",
            year: 2008,
            director: "Christopher Nolan",
            genre: "Action, Crime, Drama, Thriller",
            myRating: 5,
            favorite: false,
        },
    ]);

    // État local 
    const [showAddMovie, setShowAddMovie] = useState(false);
    const [showUpdateMovie, setShowUpdateMovie] = useState(false);
    const [editMovieData, setEditMovieData] = useState({});

    /**
     * Supprimer un film
     * @param {*} id Id du film à supprimer
     */
    const deleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    /**
     * Toggle favorite
     * @param {*} id Id du film à mettre en favoris
     */
    const toggleFavorite = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id
                    ? { ...movie, favorite: !movie.favorite }
                    : movie
            )
        );
    };

    /**
     * Editer un film
     * @param {*} id
     */
    const editMovie = (movieEdit) => {
        const movieToEdit = movies.find((movie) => movie.id === movieEdit.id);
        setEditMovieData(movieToEdit);
        setShowUpdateMovie(true); // on affiche le formulaire
    };

    /**
     * Update un film
     * @param {*} updatedMovieData
     */
    const onUpdate = (updatedMovieData) => {
        // Mettre à jour le film
        setMovies(
            movies.map((movie) =>
                movie.id === updatedMovieData.id
                    ? { ...movie, ...updatedMovieData }
                    : movie
            )
        );
        setShowUpdateMovie(false);
    };

    /**
     * Ajouter un film
     * @param {*} movie
     */
    const addMovie = (movie) => {
        const lastId = movies[movies.length - 1].id;
        const id = lastId + 1;
        const newMovie = { id, ...movie };
        setMovies([...movies, newMovie]);
    };

    // Fonction de basculement pour le formulaire d'ajout de film
    const toggleAddMovie = () => {
        // Vérifier si le formulaire UpdateMovie est actuellement affiché
        if (!showUpdateMovie) {
            setShowAddMovie(!showAddMovie); // Inverse l'état actuel du formulaire d'ajout
        } else {
            // Fermer le formulaire UpdateMovie si ouvert
            setShowUpdateMovie(false);
        }
    };

    // Fonction de basculement pour le formulaire de mise à jour de film
    const toggleUpdateMovie = () => {
        setShowUpdateMovie(!showUpdateMovie); // on inverse la valeur de l'état local
        setShowAddMovie(false);
    };

    return (
        <main className="flex-1">
            <Header
                title="Bienvenue sur votre vidéothéque"
                text="Votre bibliothéque cinématographique personnelle !"
                toggleForm={toggleAddMovie}
                // Afficher le formulaire d'ajout ou de mise à jour
                showAdd={showAddMovie || showUpdateMovie}
            />
            {showAddMovie && !showUpdateMovie && (
                <AddMovie onAdd={addMovie} setShowAddMovie={toggleAddMovie} />
            )}

            {showUpdateMovie && !showAddMovie && (
                <UpdateMovie
                    movieData={editMovieData}
                    setShowUpdateMovie={toggleUpdateMovie}
                    onUpdate={onUpdate}
                />
            )}
            <section className="my-6">
                <h2 className="text-2xl font-bold text-white mt-5 mb-5 text-center">
                    Vos films
                </h2>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead className="text-xs text-gray-800 uppercase bg-[#6290C3]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Titre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Année
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Directeur
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Genre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Coup de coeur
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Suppression
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    Modifier
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {movies.length === 0 && <p>No movies to show</p>}
                            {movies.map((movie) => (
                                <Movie
                                    movie={movie}
                                    key={movie.id}
                                    onDelete={deleteMovie}
                                    onToggle={toggleFavorite}
                                    onEdit={(movie) => editMovie(movie)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Movies;
