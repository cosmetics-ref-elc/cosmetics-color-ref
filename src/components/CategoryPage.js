import { useLocation } from "react-router";
import { useState, useEffect } from 'react';
import * as categoriesAPI from '../utilities/categories-api';
import ProductCard from './ProductCard';

const CategoryPage = () => {

    const location = useLocation();
    const category = location.state;

    const [products, setProducts] = useState([]);

    useEffect(function () {
        async function getProducts() {
            const categories = await categoriesAPI.getById(category._id);
            setProducts(categories)
        }
        getProducts()
    }, [])

    return (
        <section className="categoryPage">
            <h2>{category.name}</h2>
            {/* I'm thinking of an empty ul in here so that whatever products we have listed in our database can be displayed here as an li */}
            {/* We'll need to create some kind of forEach or map function so that we can get it displayed accordingly!! */}
            <ul className="productSelections">
                {products.length ? (<ProductCard products={products} />) : null}
            </ul>
        </section>
    )
}

export default CategoryPage;