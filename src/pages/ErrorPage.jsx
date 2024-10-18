import { Link } from 'react-router-dom';
import errorPageIcon from '../assets/error-page-icon.svg'

const ErrorPage = () => {
    return(
        <>
        <Link to="/*">
        <div className="flex flex-col items-center justify-center">
        <img className='w-[100px] my-16' src={errorPageIcon}/>
        <h1 >Ops....</h1>
        <p className='my-2'>This page does not exist</p>
        </div>
        </Link>
        </>
    )
}

export default ErrorPage;