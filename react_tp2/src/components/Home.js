import React from "react";
import Header from "./Header";
import Button from "./Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header title="Bienvenue cinéphiles" text="Votre Sanctuaire Cinématographique Personnel !" />
            <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h2 className="mb-10 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Ce que nous vous proposons :
                </h2>
                <p className="mb-8 text-2xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    <span className="font-bold">🍿 Votre Collection Personnelle :</span> Créez votre bibliothèque
                    cinématographique personnelle en ajoutant vos films
                    préférés, découvrez des pépites méconnues et partagez vos
                    recommandations avec d'autres cinéphiles.
                </p>
                <p className="mb-8 text-2xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    <span className="font-bold">❤️ Coup de Cœur :</span> Marquez vos films favoris d'un coup de
                    cœur et créez une liste spéciale des joyaux qui ont touché
                    votre cœur. Partagez ces perles rares avec la communauté.
                </p>
                <p className="mb-20 text-2xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    <span className="font-bold">⭐ Évaluations Personnalisées :</span> Exprimez votre appréciation avec des évaluations personnalisées sur 5 étoiles. Ajoutez votre note à chaque film pour partager votre opinion de manière visuelle.
                </p>
                <Link to="/films" className="btn-2">Débuter votre Collection !</Link>
            </section>
        </div>
    );
};

export default Home;
