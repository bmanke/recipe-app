import React, { useState } from 'react';
import RecipeCard from './components/RecipeCard';
import { Recipe } from './types';

const initialRecipes: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
    instructions: "Cook pasta. Mix eggs and cheese. Fry guanciale. Combine all ingredients."
  },
  {
    id: 2,
    name: "Chicken Curry",
    ingredients: ["chicken", "curry powder", "coconut milk", "onions", "garlic"],
    instructions: "Sauté onions and garlic. Add chicken and curry powder. Pour in coconut milk and simmer."
  }
];

const App: React.FC = () => {
  const [recipes] = useState<Recipe[]>(initialRecipes);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.includes(recipe.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default App;