import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';

import './styles/styles.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/product/:name" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
