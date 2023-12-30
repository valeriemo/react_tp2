import Movie from "./Movie";
import { useState, useEffect } from "react";


const Movies = ({movies, onDelete}) => {
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
                        <Movie movie={movie} onDelete={onDelete} />
                    ))}

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Movies;
