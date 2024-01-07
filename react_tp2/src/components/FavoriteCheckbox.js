import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const FavoriteCheckbox = ({ isChecked, onChange }) => {
    return (
        <div className="flex items-center">
            <label
                htmlFor="favorite"
                className="text-sm font-medium dark:text-gray-300 pr-2"
            >
                Mettre dans ses coups de coeurs
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

export default FavoriteCheckbox;
