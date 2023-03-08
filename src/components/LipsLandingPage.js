import { Link } from 'react-router-dom';


const LipsLandingPage = () => {

   
    return (

        <div>
            <h2>LIPS</h2>
            <Link to='/lips/pure-color'>
                <button >Pure Color</button>
            </Link>
            <Link to='/lips/pure-color-envy'>
                <button>Pure Color Envy</button>
            </Link>
          

        </div >
    )
}


export default LipsLandingPage