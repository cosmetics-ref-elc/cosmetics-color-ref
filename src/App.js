import { Link, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LipsLandingPage from './components/LlipsLandingPage';
import PureColor from './components/PureColor';
import PureColorEnvy from './components/PureColorEnvy';
import './styles/styles.scss';



const App = () => {
  return (
    <div className="App">
      <header>
        <Link to='/'>
          <h1>
            Chrōma
          </h1>
        </Link>
      </header>

     
    


   
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/lips' element={<LipsLandingPage />} />
        
        <Route path='/lips/pure-color' element={<PureColor />} />

        <Route path='/lips/pure-color-envy' element={<PureColorEnvy />} />

      </Routes>



    </div >
  );
}

export default App;
