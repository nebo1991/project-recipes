import recipesData from '../assets/recipes.json'
import RecipeDetailsCard from './RecipeDetailsCard';

const RecipesListPage = () => {
    return(
        <>
        <div className="w-[820px] flex flex-wrap justify-between mx-auto">
        {
            recipesData.map((recipe)=>{
                return(
                    <div className="w-[400px] mb-4" key={recipe.id}>
                    <RecipeDetailsCard {...recipe} />
                </div>
                );
            })
        }
        </div>
        </>
    )
}

export default RecipesListPage;