import { useContext } from "react";
import {recipecontext } from "../context/RecipeContext";
import { useState } from "react";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const [recipe, setRecipe] = useState(data);
  useEffect(()=> {
    setRecipe(data)
  },[data])
  return <div>{recipe}</div>;
};

export default Recipes;
