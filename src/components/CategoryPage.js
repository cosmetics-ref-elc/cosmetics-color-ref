import { useLocation } from "react-router";
import { useState, useEffect } from 'react';
import * as categoriesAPI from '../utilities/categories-api';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const CategoryPage = () => {

    const location = useLocation();
    const category = location.state;
    // console.log(category);

    const [products, setProducts] = useState([]);

    useEffect(function () {
        async function getProducts() {
            const categories = await categoriesAPI.getById(category._id);
            setProducts(categories)
        }
        getProducts()
    }, [])

    // if (products.length) {
    //     const product_cards = products[0].products.map(product =>
    //         <li
    //             key={product._id}
    //             className={product.name}
    //         >
    //             <h1>{product.name}</h1>
    //             <button><Link to={"/product/" + product.name.toLowerCase()} state={product}>Go To Product</Link></button>
    //         </li >
    //     );
    // }

    return (
        <section className="categoryPage">
            <h2>{category.name}</h2>
            {/* I'm thinking of an empty ul in here so that whatever products we have listed in our database can be displayed here as an li */}
            {/* We'll need to create some kind of forEach or map function so that we can get it displayed accordingly!! */}
            <ul className="productSelections">
                {/* commenting out for now but each will look something like this that we'll map out */}
                {/* <li onClick={handleProductsClick}>
                        IMAGE:
                        <img src={ } alt="" /> 
                        BRAND:
                        <p>{ }</p>
                        NAME OF PRODUCT:
                        <p>{ }</p>
                        HOW MANY SHADES:
                        <p>{ }shades</p>
                        SWATCH IMAGE: 
                        <img src={ } alt="" />
                </li> */}
                {products.length ? (<ProductCard products={products} />) : null}
            </ul>
        </section>
    )
}

export default CategoryPage;