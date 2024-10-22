import React, { useState } from 'react';
import { Recipe } from '../types';
import { FaStar } from 'react-icons/fa';

interface Props {
    onAddRecipe: (recipe: Omit<Recipe, 'id'>) => void;
}

const AddRecipeForm: React.FC<Props> = ({ onAddRecipe }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState<string[]>(['']);
    const [steps, setSteps] = useState<string[]>(['']);
    const [image, setImage] = useState('');
    const [mealType, setMealType] = useState('');
    const [rating, setRating] = useState(0);

    const handleAddItem = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        setter(prev => [...prev, '']);
    };

    const handleItemChange = (
        index: number,
        value: string,
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setter(prev => {
            const newItems = [...prev];
            newItems[index] = value;
            return newItems;
        });
    };

    const handleRemoveItem = (
        index: number,
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setter(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddRecipe({
            name,
            ingredients: ingredients.filter(item => item.trim() !== ''),
            steps: steps.filter(item => item.trim() !== ''),
            image,
            mealType,
            rating
        });
        setName('');
        setIngredients(['']);
        setSteps(['']);
        setImage('');
        setMealType('');
        setRating(0);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 p-4 bg-rose-950 rounded text-white">
            <div className="mb-2">
                <label htmlFor="name" className="block mb-1">Recipe Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded text-black"
                />
            </div>

            <div className="mb-2">
                <label htmlFor="mealType" className="block mb-1">Meal Type:</label>
                <input
                    type="text"
                    id="mealType"
                    value={mealType}
                    onChange={(e) => setMealType(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded text-black"
                />
            </div>

            <div className="mb-2">
                <label className="block mb-1">Rating:</label>
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            className={`text-2xl cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
                            onClick={() => setRating(star)}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-2">
                <label className="block mb-1">Ingredients:</label>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => handleItemChange(index, e.target.value, setIngredients)}
                            required
                            className="flex-grow px-2 py-1 border rounded text-black"
                            placeholder={`Ingredient ${index + 1}`}
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveItem(index, setIngredients)}
                            className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleAddItem(setIngredients)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                >
                    Add Ingredient
                </button>
            </div>

            <div className="mb-2">
                <label className="block mb-1">Steps:</label>
                {steps.map((step, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            value={step}
                            onChange={(e) => handleItemChange(index, e.target.value, setSteps)}
                            required
                            className="flex-grow px-2 py-1 border rounded text-black"
                            placeholder={`Step ${index + 1}`}
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveItem(index, setSteps)}
                            className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleAddItem(setSteps)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                >
                    Add Step
                </button>
            </div>

            <div className="mb-2">
                <label htmlFor="image" className="block mb-1">Image URL:</label>
                <input
                    type="url"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded text-black"
                />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;