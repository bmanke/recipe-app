// src/components/RecipeCard.tsx

import React from 'react';
import { Recipe } from '../types';
import { FaHeart } from 'react-icons/fa';

interface Props {
    recipe: Recipe;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
    onRemoveRecipe: (id: number) => void;
}

const RecipeCard: React.FC<Props> = ({ recipe, isFavorite, onToggleFavorite, onRemoveRecipe }) => {
    return (
        <div className="bg-rose-950 shadow-md rounded-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-white">{recipe.name}</h2>
                    <button
                        onClick={() => onToggleFavorite(recipe.id)}
                        className="focus:outline-none"
                        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        <FaHeart
                            className={`text-2xl transition-colors duration-300 ${isFavorite ? 'text-red-500' : 'text-gray-400'
                                }`}
                        />
                    </button>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">Ingredients:</h3>
                <ul className="list-disc list-inside mb-2 text-white">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                {recipe.steps && recipe.steps.length > 0 && (
                    <>
                        <h3 className="text-lg font-semibold text-white mb-1">Steps:</h3>
                        <ol className="list-decimal list-inside mb-4 text-white">
                            {recipe.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </>
                )}

                <div className="flex justify-end">
                    <button
                        onClick={() => onRemoveRecipe(recipe.id)}
                        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;