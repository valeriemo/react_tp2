import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Movies from "./components/Movies";

function App() {

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      duration: "2h 22min",
      genre: ["Crime", "Drama"],
      myRating: 3,
      favorite: false
  },
  {
      id: 2,
      title: "The Godfather",
      year: 1972,
      director: "Francis Ford Coppola",
      duration: "2h 55min",
      genre: ["Crime", "Drama"],
      myRating: 4.5,
      favorite: false
  },
  {
      id: 3,
      title: "The Godfather: Part II",
      year: 1974,
      director: "Francis Ford Coppola",
      duration: "3h 22min",
      genre: ["Crime", "Drama"],
      myRating: undefined,
      favorite: false
  },
  {
      id: 4,
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      duration: "2h 32min",
      genre: ["Action", "Crime", "Drama", "Thriller"],
      myRating: 5,
      favorite: false
  },
]);

/**
 * Supprimer un film
 * @param {*} id Id du film à supprimer
 */
const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
}

/**
 * Toggle favorite
 * @param {*} id Id du film à mettre en favoris
 */
const toggleFavorite= (id) => {
    setMovies(movies.map((movie) => movie.id === id ? {...movie, favorite: !movie.favorite} : movie));
}

    return (
        <div className="bg-gray-900 h-screen">
            <Nav />
            <Header title="Bienvenue" text="Votre bibliothéque cinématographique personnelle !"/>
            <Movies movies={movies} onDelete={deleteMovie} onToggle={toggleFavorite}/>
        </div>
    );
}

export default App;
