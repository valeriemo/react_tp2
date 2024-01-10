import Movie from "./Movie";
import UpdateMovie from "./UpdateMovie";
import AddMovie from "./AddMovie";
import Header from "./Header";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Movies = () => {
    // État local
    const [movies, setMovies] = useState([]);
    const [showAddMovie, setShowAddMovie] = useState(false);
    const [showUpdateMovie, setShowUpdateMovie] = useState(false);
    const [editMovieData, setEditMovieData] = useState({});

    /**
     *
     * @param {*} url
     * @returns
     */
    const fetchMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };

    /**
     * Récupérer les films
     */
    useEffect(() => {
        const getMovies = async () => {
            const moviesFromServer = await fetchMovies(
                "http://localhost:5000/movies"
            );
            setMovies(moviesFromServer);
        };
        getMovies();
    }, []);

    /**
     * Alerte Toastify
     * @param {*} text
     */
    const toastAlert = (text) => {
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
    };

    /**
     * Supprimer un film
     * @param {*} id Id du film à supprimer
     */
    const deleteMovie = async (id) => {
        await fetch(`http://localhost:5000/movies/${id}`, {
            method: "DELETE",
        });
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    /**
     * Toggle favorite
     * @param {*} id Id du film à mettre en favoris
     */
    const toggleFavorite = async (id) => {
        const movieToToggle = await fetchMovies(
            `http://localhost:5000/movies/${id}`
        );
        const updatedMovie = {
            ...movieToToggle,
            favorite: !movieToToggle.favorite,
        };
        const res = await fetch(`http://localhost:5000/movies/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedMovie),
        });
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
    const editMovie = async (movieEdit) => {
        const response = await fetch(
            `http://localhost:5000/movies/${movieEdit.id}`
        );
        const movieToEdit = await response.json();
        // Mettre à jour l'état du film à éditer
        setEditMovieData(movieToEdit);
        setShowUpdateMovie(true); // on affiche le formulaire
    };

    /**
     * Update un film
     * @param {*} updatedMovieData
     */
    const onUpdate = async (updatedMovieData) => {
        const res = await fetch(
            `http://localhost:5000/movies/${updatedMovieData.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(updatedMovieData),
            }
        );
        const data = await res.json();
        setMovies(
            movies.map((movie) =>
                movie.id === updatedMovieData.id
                    ? {
                          ...movie,
                          title: updatedMovieData.title,
                          year: updatedMovieData.year,
                          director: updatedMovieData.director,
                          genre: updatedMovieData.genre,
                          myRating: updatedMovieData.myRating,
                          favorite: updatedMovieData.favorite,
                      }
                    : movie
            )
        );
        setShowUpdateMovie(false);
        toastAlert("Film modifié avec succès !");
    };

    /**
     * Ajouter un film
     * @param {*} movie
     */
    const addMovie = async (movie) => {
        const res = await fetch("http://localhost:5000/movies", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(movie),
        });
        // Trouver le plus grand ID existant
        const lastId =
            movies.length > 0
                ? Math.max(...movies.map((movie) => movie.id))
                : 0;

        // Utiliser le nouvel ID pour le nouveau film
        const newMovie = { id: lastId + 1, ...movie };

        // Mettre à jour l'état des films dans votre application
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
                    <ToastContainer />
                </div>
            </section>
        </main>
    );
};

export default Movies;
