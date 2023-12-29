import PropTypes from 'prop-types';

// Définir les styles de button avec variable className='btn-{btnStyle}'

const Button = ({ text, onClick, btnStyle }) => {
  return (
    <button className={btnStyle} onClick={onClick}>
      {text}
    </button>
  );
}


Button.defaultProps = {
    text: "Default text"
    }

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;
