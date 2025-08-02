import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes);
        setError(null);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again later.');
        console.error('Error fetching recipes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div >
        <div ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div >
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div >
      <h1>
        Delicious Recipes
      </h1>
      <input type="search"  />
      <div style={{display:'flex', flexDirection : 'row'  }}>

        <div >
            {recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
            ))}
        </div>

      </div>
    </div>
  );
};

export default RecipeList; 