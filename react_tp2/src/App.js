import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import UpdateMovie from "./components/UpdateMovie";
import AddMovie from "./components/AddMovie";

function App() {
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
            myRating: undefined,
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
    const editMovie = (id) => {
        const movieToEdit = movies.find((movie) => movie.id === id);
        setEditMovieData(movieToEdit);
        // je veux afficher le formulaire avec les données du film à éditer
        setShowUpdateMovie(true); // on affiche le formulaire
    };
    // [state, setState]
    const [editMovieData, setEditMovieData] = useState({});

    /**
     *
     * Ajouter un film
     * @param {*} movie
     */
    const addMovie = (movie) => {
        const lastId = movies[movies.length - 1].id;
        const id = lastId + 1;
        const newMovie = { id, ...movie };
        setMovies([...movies, newMovie]);
    };

    // État local pour le formulaire d'ajout de film
    const [showAddMovie, setShowAddMovie] = useState(false);

    // État local pour le formulaire de mise à jour de film
    const [showUpdateMovie, setShowUpdateMovie] = useState(false);

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
        <div className="bg-gray-900">
            <Nav />
            <Header
                title="Bienvenue"
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
                    onUpdate={editMovie}
                    movieData={editMovieData}
                    setShowUpdateMovie={toggleUpdateMovie}
                />
            )}

            <Movies
                movies={movies}
                onDelete={deleteMovie}
                onToggle={toggleFavorite}
                onEdit={editMovie}
            />
        </div>
    );
}

export default App;
