import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponse.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params.details);

  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}

export default RecipeDetails;
