import Link from "next/link";

function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky sm:flex gap-2">
            <img
              className="w-4/5 rounded object-cover"
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>
            <div className=" gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link
            className="bg-green-700 p-3 text-white rounded-lg font-bold"
            href={"/recipe-list"}
          >
            Go to Recipe list
          </Link>
        </div>
      </div>
    </>
  );
}

export default RecipeDetailsItem;
