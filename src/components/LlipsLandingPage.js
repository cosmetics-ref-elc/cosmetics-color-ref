import { Link} from 'react-router-dom';


const LipsLandingPage = () => {

   
    return (

        <div>

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