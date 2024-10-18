import errorPageIcon from '../assets/error-page-icon.svg'

const ErrorPage = () => {
    return(
        <>
        <div className="flex flex-col items-center justify-center">
        <img className='w-[100px] my-16' src={errorPageIcon}/>
        <h1 >Ops....</h1>
        <p className='my-2'>This page does not exist</p>
        </div>
        </>
    )
}

export default ErrorPage;