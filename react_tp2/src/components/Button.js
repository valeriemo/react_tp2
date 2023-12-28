import PropTypes from 'prop-types';


const Button = ({ text, onClick }) => {
  return (
    <button className='btn-1' onClick={onClick}>
      {text}
    </button>
  );
}


Button.defaultProps = {
    text: "Default text"
    }



export default Button;
