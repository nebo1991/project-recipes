import { Link } from 'react-router-dom';
import recipesLogo from '../assets/recipes-logo.svg'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#3a1c71] via-[#d76d77] to-[#ffaf7b] text-white ">
            <Link to="/"> <img id="logo" src={recipesLogo} alt="logo-photo" className='w-10' /> </Link>
            <Link to="/about"><button>About</button></Link>
        </div>
       
    

    )
}

export default Navbar;


