import recipesLogo from '../assets/recipes-logo.svg'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#3a1c71] via-[#d76d77] to-[#ffaf7b] p-4 text-white text-white ">
            <img id="logo" src={recipesLogo} alt="logo-photo" className='w-10' />
            <button>About</button>
        </div>
    )
}

export default Navbar;


