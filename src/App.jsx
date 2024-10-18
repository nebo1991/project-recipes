import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RecipesListPage from '../src/pages/RecipesListPage';
import RecipeDetailsPage from '../src/pages/RecipeDetailsPage';
import { useState } from 'react';
import recipesData from './assets/recipes.json';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

function App() {
    const [recipes, setRecipes] = useState(recipesData);
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(1);
    const [image, setImage] = useState("");
    const [recipeInfo, setRecipeInfo] = useState("");

    const deleteRecipe = (recipeId) => {
        const filteredRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
        setRecipes(filteredRecipes)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
            name,
            calories,
            image,
            servings,
            recipeInfo,
        };

        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
        setName("");
        setCalories(0);
        setServings(1);
        setImage("");
        setRecipeInfo("");
    };

    return (
        <div className="flex flex-col min-h-screen bg-rose-200">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={
                        <RecipesListPage 
                            recipes={recipes} 
                            name={name} 
                            calories={calories} 
                            image={image}
                            recipeInfo={recipeInfo}
                            setName={setName} 
                            setCalories={setCalories} 
                            setServings={setServings} 
                            setImage={setImage}
                            handleSubmit={handleSubmit} 
                            deleteRecipe={deleteRecipe} 
                            setRecipeInfo={setRecipeInfo}
                        />
                    } />
                    <Route path="/recipes/:id" element={<RecipeDetailsPage recipes={recipes} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
