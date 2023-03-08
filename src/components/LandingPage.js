import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <div className='linkContainer'>
                <Link to='/eyes'>
                    {/* remove 'button' later because semantically it should just be a link and we can put a class of button to style it like one */}
                    <button>Eyes</button>
                </Link>

                <Link to = '/lips'>
                    <button>Lips</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;