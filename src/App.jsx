import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RecipesListPage from './components/RecipesListPage'
import RecipeDetailsCard from './components/RecipeDetailsCard'

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <main className="flex-grow"> 
        <Routes>
          <Route path="/" element={<RecipesListPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailsCard />} />
        </Routes>
      </main>
      <Footer /> 
    </div>
  )
}

export default App
