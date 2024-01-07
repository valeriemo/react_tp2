import PropTypes from 'prop-types'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'
// quand on est sur la page d'accueil, on affiche le bouton "voir les films"
// quand on est sur la page des films, on affiche le bouton "ajouter un film"

const Header = (props) => {
    const location = useLocation()
    return (
        <header className='bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
                <h1 className='mb-4 text-6xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>{props.title}</h1>
                <p className='mb-8 text-2xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>{props.text}</p>
                {(location.pathname === '/' && <Link to="/films" className='btn-2'>Voir les films</Link>) || (location.pathname === '/films' && <Button text={props.showAdd ? 'Fermer' : 'Ajouter un film'} btnStyle={props.showAdd ? 'btn-red' : 'btn-2'} onClick={props.toggleForm} />)}
                
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: "Default title"
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func

}
export default Header;
