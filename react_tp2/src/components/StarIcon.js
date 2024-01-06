import { FaStar } from "react-icons/fa";

const StarIcon = ({ selected, onSelect }) => {
    return (
        <FaStar
            color={selected ? "#ffc107" : "#e4e5e9"}
            onClick={onSelect}
            className="pointer"
        />
    );
}

export default StarIcon;