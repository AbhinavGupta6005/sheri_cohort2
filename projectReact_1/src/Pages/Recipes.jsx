import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useState, useEffect } from "react";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const [recipe, setRecipe] = useState(data);
  useEffect(() => {
    setRecipe(data)
  }, [data])


  return <div>{recipe.map((recipe, i) => (
    <h1 key={i.id}>{recipe.title}</h1>
  ))}</div>;
};

export default Recipes;