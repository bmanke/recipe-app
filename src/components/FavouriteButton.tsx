import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const FavoriteButton: React.FC<{ recipeId: number }> = ({ recipeId }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <button
            onClick={toggleFavorite}
            className="focus:outline-none"
        >
            <FaHeart
                className={`text-2xl transition-colors duration-300 ${isFavorite ? 'text-red-500' : 'text-gray-400'
                    }`}
            />
        </button>
    );
};

export default FavoriteButton;
