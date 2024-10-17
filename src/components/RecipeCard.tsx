import React from 'react';
import { Recipe } from '../types';

interface Props {
    recipe: Recipe;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
}

const RecipeCard: React.FC<Props> = ({ recipe, isFavorite, onToggleFavorite }) => {
    return (
        <div className="bg-rose-950 shadow-md rounded-lg p-4 m-2">
            <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
            <h3 className="text-lg font-semibold mb-1">Ingredients:</h3>
            <ul className="list-disc list-inside mb-2">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-1">Instructions:</h3>
            <p className="mb-4">{recipe.instructions}</p>
            <button
                onClick={() => onToggleFavorite(recipe.id)}
                className={`px-4 py-2 rounded ${isFavorite ? 'bg-fuchsia-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
            >
                {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
        </div>
    );
};

export default RecipeCard;
