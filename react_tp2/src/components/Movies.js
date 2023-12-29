import Movie from "./Movie";

const movies = [
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
];

const Movies = () => {
    return (
        <section>
            <h2 class="text-2xl font-semibold text-white mt-5 mb-5 text-center">Vos films</h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-8">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Titre
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Année
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Directeur
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Genre
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Favoris
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Édition
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Suppression
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                       
                    {movies.length === 0 && <p>No movies to show</p>}
                    {movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Movies;
