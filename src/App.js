import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';
import TheCreators from './components/TheCreators';

import './styles/styles.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route path="/about-the-creators" element={<TheCreators />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
