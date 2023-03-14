import { useEffect, useState } from 'react';

import CategoryCard from './CategoryCard';
import * as categoriesAPI from '../utilities/categories-api';

const LandingPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const categories = await categoriesAPI.getAll();
      setCategories(categories)
    }
    getCategories()
    console.log('I only fire once!')
  }, []);

  return (
    <section className="landingPage">
      <header>
        <h2>Cosmetic Color Reference</h2>
        <p className="shortDesc">
          Short description explaining what this app does and who it serves. 
          {/* is this going to have an expandable 'learn more' thing? */}
        </p>
      </header>
      <div className="categories">
        <h3>Browse Product Categories</h3>
        <CategoryCard categories={categories} />
      </div>
    </section>
  );
}

export default LandingPage;