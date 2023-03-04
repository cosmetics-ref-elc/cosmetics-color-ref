import { Link, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import './styles/styles.scss';



const App = () =>{
  return (
    <div className="App">
       {<header>
      <Link to='/'>
        <h1>
        Chrōma
        </h1>
      </Link>
    </header> }

      { <Routes>
        <Route path ='/' element={<LandingPage/>}/>
          
       
      </Routes> }
    
    
    
    
    </div>
  );
}

export default App;
