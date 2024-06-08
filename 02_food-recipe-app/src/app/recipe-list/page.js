import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();

    return data?.recipes;
  } catch (error) {
    throw new Error(error);
  }
}

async function Recipes() {
  const recipeList = await fetchListOfRecipes();

  return <RecipeList recipeList={recipeList} />;
}

export default Recipes;
