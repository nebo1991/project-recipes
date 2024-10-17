import { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipesListPage = ({ 
  recipes, 
  name, setName, 
  image, setImage, 
  servings, setServings, 
  calories, setCalories, 
  recipeInfo, setRecipeInfo, 
  deleteRecipe, 
  handleSubmit 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handlename = (e) => setName(e.target.value);
  const handlecalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleRecipeInfo = (e) => setRecipeInfo(e.target.value);

  return (
    <>
      <div className="max-w-md mx-auto mb-6 my-4">
        <button
          className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 transition duration-300"
          onClick={toggleAccordion}
        >
          {isOpen ? 'Hide' : 'Add New Recipe'}
        </button>
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto'>
            <input
              className='mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              name="name"
              type="text"
              placeholder="Recipe Name"
              value={name}
              onChange={handlename}
            />
            <input
              className='mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              name="text"
              type="url"
              placeholder="Add URL"
              value={image}
              onChange={handleImage}
            />
            <input
              className='mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              name="recipeInfo"
              type="text"
              placeholder="Recipe Info"
              value={recipeInfo}
              onChange={handleRecipeInfo}
            />
            <input
              className='mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              name="calories"
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={handlecalories}
            />
            <input
              className='mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              name="servings"
              type="number"
              placeholder="Servings"
              value={servings}
              onChange={handleServings}
            />
            <button
              className='bg-indigo-500 text-white p-3 rounded-lg w-full hover:bg-indigo-600 transition duration-300'
              type="submit"
            >
              Add Recipe
            </button>
          </div>
        </form>
      )}

      <div className="w-[920px] flex flex-wrap justify-between mx-auto mt-6">
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
                <button 
                  onClick={() => deleteRecipe(recipe.id)}
                  className=" text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipesListPage;
