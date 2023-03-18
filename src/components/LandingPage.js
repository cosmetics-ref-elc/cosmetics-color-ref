import { useEffect, useState } from 'react';

import CategoryCard from './CategoryCard';
import * as categoriesAPI from '../utilities/categories-api';

const LandingPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const categories = await categoriesAPI.getAll();
      setCategories(categories)
      console.log(categories)
    }
    getCategories()
    console.log('I only fire once!')
  }, []);

  return (
    <section className="landingPage">
      <header>
        <h2>Cosmetic Color Reference</h2>
        <p className="shortDesc">
          <b>chrōma</b> is a comprehensive color reference designed for the
          Color Vision Deficiency community by bridging any barriers they may
          face when exploring the world of cosmetics.
        </p>
      </header>
      <div className="categories">
        <h3>Browse Product Categories</h3>
        <ul>
          <CategoryCard categories={categories} />
        </ul>
      </div>
    </section>
  );
}

export default LandingPage;