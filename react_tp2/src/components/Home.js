import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <Header title="Bienvenue cinéphiles" text="Voici une description" />
        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h2 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">À propos</h2>
            <p className="mb-8 text-2xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Ce site vous permet de blafdhjashflasi</p>
        </section>
    </div>
  )
}

export default Home