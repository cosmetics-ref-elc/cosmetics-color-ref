import { Link } from 'react-router-dom';

const EyesLandingPage = () => {
    return (
        <div>
            <h2>EYES</h2>
        <Link to="/eyes/smoke-and-brighten">
          <button>Smoke & Brighten Kajal Eyeliner Duo</button>
        </Link>
        <Link to="/eyes/pure-color-envy">
          <button>Pure Color Envy - Luxe EyeShadow Quad</button>
        </Link>
      </div>
    );
}

export default EyesLandingPage;