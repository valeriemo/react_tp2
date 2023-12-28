import PropTypes from 'prop-types'
import Button
 from './Button'
const Header = (props) => {
    return (
        <header className='bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
                <h1 className='mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>{props.title}</h1>
                <p className='mb-8 text-2xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>{props.text}</p>
                <Button text='Ajouter un film' />
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: "Default title"
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
}
export default Header;
