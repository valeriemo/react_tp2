import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

const FavoriteCheckbox = ({ isChecked, onChange, textLabel }) => {
    return (
        <div className="flex items-center">
            <label
                htmlFor="favorite"
                className="text-sm font-medium dark:text-gray-300 pr-2"
            >
                {textLabel}
            </label>
            {isChecked ? (
                <FaHeart
                    className="text-[#e9295c] text-xl cursor-pointer"
                    onClick={onChange}
                />
            ) : (
                <FaRegHeart
                    className="text-gray-400 text-xl cursor-pointer"
                    onClick={onChange}
                />
            )}
        </div>
    );
};

FavoriteCheckbox.defaultProps = {
    onChange: () => {},
    textLabel: "Mettre dans ses coups de coeurs",
};

FavoriteCheckbox.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    textLabel: PropTypes.string,
};

export default FavoriteCheckbox;
