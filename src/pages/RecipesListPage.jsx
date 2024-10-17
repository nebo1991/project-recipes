// src/components/RecipesListPage.jsx
import { Link } from 'react-router-dom';

const RecipesListPage = ({ recipes, name, setName, servings, setServings, calories, setCalories, handleSubmit }) => {
    const handlename = (e) => setName(e.target.value);
    const handlecalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className=' flex-column items-center'>
                    <input name="name" type="text" placeholder="Recipe Name" value={name} onChange={handlename} />
                    <input name="calories" type="number" placeholder="Calories" value={calories} onChange={handlecalories} />
                    <input name="calories" type="number" placeholder="Servings" value={servings} onChange={handleServings} />
                    <button type="submit">Add Recipe</button>
                </div>
            </form>
            <div className="w-[920px] flex flex-wrap justify-between mx-auto">
                {recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="flex border-2 border-gray-300 rounded-lg p-4 w-[400px] m-4">
                            <Link to={`/recipes/${recipe.id}`}>
                                <img src={recipe.image} alt="food-image" className="flex w-[250px] h-[200px]" />
                            </Link>
                            <div className="flex flex-col gap-4 ml-4">
                                <h1>{recipe.name}</h1>
                                <h2>Calories: {recipe.calories}</h2>
                                <p>Servings: {recipe.servings}</p>
                                {recipe.calories > 400 && (
                                    <button className="bg-red-200 p-2 rounded-full my-6">High 🔥</button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default RecipesListPage;
