import { Link } from 'react-router-dom';
import recipesData from '../assets/recipes.json'
import { useState } from 'react';


const RecipesListPage = () => {
    const [recipes, setRecipe] = useState(recipesData);
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);

    const handlename =  (e) => setName(e.target.value);
    const handlecalories =  (e) => setCalories(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = { id: Math.floor(Math.random() * (90 - 10 + 1)) + 10 ,name, calories,   };
    
    
   
    setRecipe([...recipes, newRecipe]);

    setName("")
 
  };

    return(
        <>
    <form onSubmit={handleSubmit}>
        <div>
        <input name="name" type="text" placeholder="Full Name" value={name} onChange={handlename} />
        <input name="calories" type="number" placeholder="Full Name" value={calories} onChange={handlecalories} />
        <button type="submit">Add recipe</button>
        </div>
    </form>
        <div className="w-[920px] flex flex-wrap justify-between mx-auto">
        {
            recipes.map((recipe)=>{
                return(
            <div key={recipe.id}   className="flex border-2 border-gray-300 rounded-lg p-4 w-[400px] m-4"        >
               <Link to={`/recipes/${recipe.id}`}> <img src={recipe.image} href="#" alt="food-image" className="flex w-[250px] h-[200px]" /></Link>
                <div className="flex flex-col gap-4 ml-4">
                    <h1>{recipe.name}</h1>
                    <h2>calories: {recipe.calories}</h2>
                    <p>servings: {recipe.servings}</p>
                    {recipe.calories > 400 && <button className="bg-red-200 p-2 rounded-full  my-6">High 🔥</button>}
                 </div>
          </div>
                );
            })
        }
       
        </div>
        </>
    )
}

export default RecipesListPage;