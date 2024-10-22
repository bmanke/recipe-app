import React, { useState, useEffect } from 'react';
import RecipeCard from './components/RecipeCard';
import AddRecipeForm from './components/AddRecipeForm';
import { Recipe } from './types';
import { initialRecipes } from './data/initialRecipes';
import { FaSearch, FaHeart } from 'react-icons/fa';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : initialRecipes;
  });
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterMealType, setFilterMealType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

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

  const mealTypes = ['All', ...Array.from(new Set(recipes.map(recipe => recipe.mealType)))];

  const filteredRecipes = recipes
    .filter(recipe => !showOnlyFavorites || favorites.includes(recipe.id))
    .filter(recipe => filterMealType === 'All' || recipe.mealType === filterMealType)
    .filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="container mx-auto p-4 bg-rose-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-rose-950">Recipe Tracker</h1>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          {showAddForm ? 'Cancel' : 'Add New Recipe'}
        </button>
        <button
          onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-colors duration-300 ${showOnlyFavorites
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          <FaHeart /> {showOnlyFavorites ? 'Show All' : 'Show Favorites'}
        </button>
        <div className="flex-grow"></div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-rose-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-400" />
        </div>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-rose-950 font-semibold">Filter by Meal Type:</span>
        {mealTypes.map(type => (
          <button
            key={type}
            onClick={() => setFilterMealType(type)}
            className={`px-3 py-1 rounded ${filterMealType === type
                ? 'bg-rose-500 text-white'
                : 'bg-rose-200 text-rose-800 hover:bg-rose-300'
              } transition-colors duration-300`}
          >
            {type}
          </button>
        ))}
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