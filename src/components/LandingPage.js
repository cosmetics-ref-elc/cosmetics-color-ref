import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <div className='linkContainer'>
            <Link>  
            <button>Eyes </button>
            </Link>

            <Link to = '/lips'>
            <button>Lips</button>
            </Link>
            </div>

        </div>
    )
}

export default LandingPage;