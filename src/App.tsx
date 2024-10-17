// src/App.tsx

import React, { useState, useEffect } from 'react';
import RecipeCard from './components/RecipeCard';
import AddRecipeForm from './components/AddRecipeForm';
import { Recipe } from './types';
import { initialRecipes } from './data/initialRecipes';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : initialRecipes;
  });

  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const addRecipe = (newRecipe: Omit<Recipe, 'id'>) => {
    const id = Math.max(0, ...recipes.map(r => r.id)) + 1;
    setRecipes(prevRecipes => [...prevRecipes, { ...newRecipe, id }]);
    setShowAddForm(false);
  };

  const removeRecipe = (id: number) => {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    setFavorites(prevFavorites => prevFavorites.filter(favId => favId !== id));
  };

  console.log('Recipes:', recipes);

  return (
    <div className="container mx-auto p-4 bg-rose-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-rose-950">Recipe Tracker</h1>
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        {showAddForm ? 'Cancel' : 'Add New Recipe'}
      </button>
      {showAddForm && <AddRecipeForm onAddRecipe={addRecipe} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.includes(recipe.id)}
            onToggleFavorite={toggleFavorite}
            onRemoveRecipe={removeRecipe}
          />
        ))}
      </div>
    </div>
  );
};

export default App;