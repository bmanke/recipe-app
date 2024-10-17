// src/components/AddRecipeForm.tsx

import React, { useState } from 'react';
import { Recipe } from '../types';

interface Props {
    onAddRecipe: (recipe: Omit<Recipe, 'id'>) => void;
}

const AddRecipeForm: React.FC<Props> = ({ onAddRecipe }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState<string[]>(['']);
    const [image, setImage] = useState('');

    const handleAddStep = () => {
        setSteps([...steps, '']);
    };

    const handleStepChange = (index: number, value: string) => {
        const newSteps = [...steps];
        newSteps[index] = value;
        setSteps(newSteps);
    };

    const handleRemoveStep = (index: number) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddRecipe({
            name,
            ingredients: ingredients.split(',').map(i => i.trim()),
            steps: steps.filter(step => step.trim() !== ''),
            image
        });
        setName('');
        setIngredients('');
        setSteps(['']);
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 p-4 bg-rose-950 rounded">
            <div className="mb-2">
                <label htmlFor="name" className="block mb-1 text-white">Recipe Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="ingredients" className="block mb-1 text-white">Ingredients (comma-separated):</label>
                <input
                    type="text"
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded"
                />
            </div>
            <div className="mb-2">
                <label className="block mb-1 text-white">Steps:</label>
                {steps.map((step, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            value={step}
                            onChange={(e) => handleStepChange(index, e.target.value)}
                            required
                            className="flex-grow px-2 py-1 border rounded"
                            placeholder={`Step ${index + 1}`}
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveStep(index)}
                            className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddStep}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                >
                    Add Step
                </button>
            </div>
            <div className="mb-2">
                <label htmlFor="image" className="block mb-1 text-white">Image URL:</label>
                <input
                    type="url"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;