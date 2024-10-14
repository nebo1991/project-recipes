const RecipeDetailsCard = ({id, image, name, calories, servings}) => {
    return(
        <>
        <div key={id}   className="flex border-2 border-gray-300 rounded-lg p-4 w-[400px] m-4"        >
            <img src={image} href="#" alt="food-image" className="flex w-[250px] h-[200px]" />
            <div className="flex-col">
            <h1>{name}</h1>
            <h2>calories: {calories}</h2>
            <p>servings:: {servings}</p>
            </div>
        </div>
        </>
    )
}

export default RecipeDetailsCard;


// {
//     "id": "bf89c1db-5c5b-4262-9d1e-8a68f88c61d5",    
//     "name": "Lasagna",
//     "calories": 750,
//     "image": "https://i.imgur.com/ClxOafl.jpg",
//     "servings": 1
//   },







// {
//     "id": "bf89c1db-5c5b-4262-9d1e-8a68f88c61d5",    
//     "name": "Lasagna",
//     "calories": 750,
//     "image": "https://i.imgur.com/ClxOafl.jpg",
//     "servings": 1
//   },