import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropsTypes from "prop-types";

const FavoriteCheckbox = ({ isChecked, onChange, text }) => {
    return (
        <div className="flex items-center">
            <label
                htmlFor="favorite"
                className="text-sm font-medium dark:text-gray-300 pr-2"
            >
                {text}
            </label>
            {/* Utiliser un cœur vide ou un cœur rempli en fonction de l'état isChecked */}
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
    text: "Mettre dans ses coups de cœur",
};

FavoriteCheckbox.PropsTypes = {
    isChecked: PropsTypes.bool.isRequired,
    onChange: PropsTypes.func.isRequired,
    text: PropsTypes.string,
};

export default FavoriteCheckbox;
