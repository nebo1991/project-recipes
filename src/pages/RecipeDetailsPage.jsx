import { useParams } from "react-router-dom";

const RecipeDetailsPage = ({ recipes }) => {
    const { id } = useParams();
    const singleRecipe = recipes.find((recipe) => recipe.id === parseInt(id)); 

    if (!singleRecipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center my-8">
                <img src={singleRecipe.image} alt="food-image" className="flex w-[250px] h-[200px]" />
                <div className="flex flex-col items-center gap-4 ml-4 w-[400px]">
                    <h1 className="my-2">{singleRecipe.name}</h1>
                    <h2>Calories: {singleRecipe.calories}</h2>
                    <p>Servings: {singleRecipe.servings}</p>
                    <p>{singleRecipe.recipeInfo}</p>
                    {singleRecipe.calories > 400 && (
                        <button className="bg-red-200 p-2 rounded-full my-6">High 🔥</button>
                    )}
                </div>
            </div>
        </>
    );
};

export default RecipeDetailsPage;
