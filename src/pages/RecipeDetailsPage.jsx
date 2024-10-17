import { useParams } from "react-router-dom";

const RecipeDetailsPage = ({ recipes }) => {
    const { id } = useParams();
    const singleRecipe = recipes.find((recipe) => recipe.id === parseInt(id)); 

    if (!singleRecipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <>
            <div className="flex border-2 border-gray-300 rounded-lg p-4 w-[400px] m-4">
                <img src={singleRecipe.image} alt="food-image" className="flex w-[250px] h-[200px]" />
                <div className="flex flex-col gap-4 ml-4">
                    <h1>{singleRecipe.name}</h1>
                    <h2>Calories: {singleRecipe.calories}</h2>
                    <p>Servings: {singleRecipe.servings}</p>
                    {singleRecipe.calories > 400 && (
                        <button className="bg-red-200 p-2 rounded-full my-6">High 🔥</button>
                    )}
                </div>
            </div>
        </>
    );
};

export default RecipeDetailsPage;
