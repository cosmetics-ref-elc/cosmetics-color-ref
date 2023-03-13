import { useLocation } from "react-router";
import { useState, useEffect } from 'react';
import * as categoriesAPI from '../utilities/categories-api';
import ProductCard from './ProductCard';
// import ProductPage from "./ProductPage";

// CategoryPage pseudocode (one page for both eyes and lips)
// - In the productCard:
//     - image 
//     - brand
//     - name of product 
//     - how many shades
//     - swatch img
// - when user clicks on a productCard, it calls API (take the name of the product)
// (onClick)

const CategoryPage = () => {
    // For now, created the state and basic function here, which can be called when the products are clicked! 
    // const [isClicked, setIsClicked] = useState(false);
    // const handleProductsClick = () => {
    //   setIsClicked(true);
    // };

    const location = useLocation()
    const category = location.state;
    console.log(category)

    const [products, setProducts] = useState([]);

    useEffect(function () {
        async function getProducts() {
            const products = await categoriesAPI.getById(category._id);
            setProducts(products)
        }
        console.log(products)
        getProducts()
    }, [])

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

                <ProductCard products={products} />
            </ul>

            {/* {isClicked && <ProductPage/>} */}
        </section>
    )
}

export default CategoryPage;