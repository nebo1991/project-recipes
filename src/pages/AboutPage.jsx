import imageAbout from '../assets/about-image.svg'
import reactIcon from '../assets/react-icon.svg'
import tailwindIcon from '../assets/tailwind.svg'

const AboutPage = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <img src={imageAbout} href="#" alt="cooking-image" className='w-[200px] my-8' />
            <h1>Welcome friends, hope you can find some nice recipes here</h1>
            <br />
            <p>This project has been built with:</p>
            <div className='flex'>
                    <img src={reactIcon} className='w-[100px]' />
                    <img src={tailwindIcon} className='w-[100px]' />
                    </div>
        </div>
        </>
    )
}

export default AboutPage;