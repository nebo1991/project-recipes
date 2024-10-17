// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RecipesListPage from '../src/pages/RecipesListPage';
import RecipeDetailsPage from '../src/pages/RecipeDetailsPage';
import { useState } from 'react';
import recipesData from './assets/recipes.json';
import AboutPage from './pages/AboutPage';

function App() {
    const [recipes, setRecipes] = useState(recipesData);
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
            name,
            calories,
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Ffood-svg&psig=AOvVaw0Svct_7bgRCbzn-Skr4Izx&ust=1729259421085000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDkmb_HlYkDFQAAAAAdAAAAABAE", 
            servings,
        };

        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
        setName("");
        setCalories(0);
        setServings(1);
    };

    return (
        <div className="flex flex-col min-h-screen bg-rose-200" >
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={
                        <RecipesListPage 
                            recipes={recipes} 
                            name={name} 
                            calories={calories} 
                            setName={setName} 
                            setCalories={setCalories} 
                            setServings={setServings} 
                            handleSubmit={handleSubmit} 
                        />
                    } />
                    <Route path="/recipes/:id" element={<RecipeDetailsPage recipes={recipes} />} />
                    <Route path="/about" element={<AboutPage  />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
