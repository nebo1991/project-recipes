import facebookLogo from '../assets/facebook-logo.svg'
import instagramLogo from '../assets/instagram-logo.svg'
import youtubeLogo from '../assets/youtube-logo.svg'
import linkedinLogo from '../assets/linkedin-logo.svg'

const Footer = () => {
    return (
        <>
     <div className="flex flex-col justify-center space-x-8 px-4 text-white py-4 bg-gradient-to-r from-[#ff6e7f] to-[#bfe9ff]">
        <div className="flex justify-center space-x-8 px-4 text-white py-4">
            <a href="https://www.facebook.com/" target='_blank'><img id="logo" src={facebookLogo} alt="logo-photo" className='w-10' /></a>
            <a href="https://www.instagram.com/" target='_blank'><img id="logo" src={instagramLogo} alt="logo-photo" className='w-10' /></a>
            <a href="https://www.youtube.com/" target='_blank'><img id="logo" src={youtubeLogo} alt="logo-photo" className='w-10' /></a>
            <a href="https://www.linkedin.com/" target='_blank'><img id="logo" src={linkedinLogo} alt="logo-photo" className='w-10' /></a>
   
           </div>
           <div className='flex justify-center'><p>Made in Berlin with ❤️</p></div>
        
        </div>
     
     </>
    )
}

export default Footer;