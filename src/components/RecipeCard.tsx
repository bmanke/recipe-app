import React from 'react';
import { Recipe } from '../types';
import { FaHeart, FaCopy, FaStar } from 'react-icons/fa';

interface Props {
    recipe: Recipe;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
    onRemoveRecipe: (id: number) => void;
}

const RecipeCard: React.FC<Props> = ({ recipe, isFavorite, onToggleFavorite, onRemoveRecipe }) => {
    const copyToClipboard = () => {
        const recipeText = `
Recipe: ${recipe.name}
Meal Type: ${recipe.mealType}
Rating: ${recipe.rating}/5

Ingredients:
${recipe.ingredients.map(ingredient => `- ${ingredient}`).join('\n')}

Steps:
${recipe.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}
    `.trim();

        navigator.clipboard.writeText(recipeText).then(() => {
            alert('Recipe copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy recipe: ', err);
        });
    };

    return (
        <div className="bg-rose-950 shadow-md rounded-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-white">{recipe.name}</h2>
                    <div className="flex space-x-2">
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
                        <button
                            onClick={copyToClipboard}
                            className="focus:outline-none text-blue-400 hover:text-blue-300"
                            aria-label="Copy recipe to clipboard"
                        >
                            <FaCopy className="text-2xl" />
                        </button>
                    </div>
                </div>

                {recipe.mealType && (
                    <p className="text-white mb-2">Meal Type: {recipe.mealType}</p>
                )}

                {recipe.rating !== undefined && (
                    <div className="flex items-center mb-2">
                        <span className="text-white mr-2">Rating:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`text-xl ${star <= recipe.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                            />
                        ))}
                    </div>
                )}

                <h3 className="text-lg font-semibold text-white mb-1">Ingredients:</h3>
                <ul className="list-disc list-inside mb-2 text-white">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                <h3 className="text-lg font-semibold text-white mb-1">Steps:</h3>
                <ol className="list-decimal list-inside mb-4 text-white">
                    {recipe.steps.map((step, index) => (
                        <li key={index} className="mb-1">{step}</li>
                    ))}
                </ol>

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