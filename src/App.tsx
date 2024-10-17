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
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterMealType, setFilterMealType] = useState<string>('All');

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

  const mealTypes = ['All', ...new Set(recipes.map(recipe => recipe.mealType))];

  const filteredRecipes = filterMealType === 'All'
    ? recipes
    : recipes.filter(recipe => recipe.mealType === filterMealType);

  return (
    <div className="container mx-auto p-4 bg-rose-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-rose-950">Recipe Tracker</h1>
      <div className="mb-4 flex justify-between items-center">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          {showAddForm ? 'Cancel' : 'Add New Recipe'}
        </button>
        <div>
          <label htmlFor="mealTypeFilter" className="mr-2 text-rose-950">Filter by Meal Type:</label>
          <select
            id="mealTypeFilter"
            value={filterMealType}
            onChange={(e) => setFilterMealType(e.target.value)}
            className="px-2 py-1 rounded border border-rose-300 bg-white text-rose-950"
          >
            {mealTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      {showAddForm && <AddRecipeForm onAddRecipe={addRecipe} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map(recipe => (
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