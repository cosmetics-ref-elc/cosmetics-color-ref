import { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import ProductCard from './ProductCard';
import * as categoriesAPI from '../utilities/categories-api';

const CategoryPage = () => {
    const location = useLocation();
    const category = location.state;
    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function getProducts() {
        const categories = await categoriesAPI.getById(category._id);
        setProducts(categories);
      }
        getProducts();
        // dependency array was erroring out so added it in**
    }, [category._id]);

    return (
        <section className="categoryPage">
            <h2>{category.name}</h2>
            <ul className="productSelections">
                {products.length ? (<ProductCard products={products} />) : null}
            </div>
        </section>
    )
}

export default CategoryPage;