import Movie from "./Movie";
import { useState, useEffect } from "react";


const Movies = ({movies, onDelete, onToggle, onEdit}) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-white mt-5 mb-5 text-center">Vos films</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-8">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        <Movie movie={movie} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
                    ))}

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Movies;
