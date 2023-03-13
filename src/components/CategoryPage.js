// import { useState } from 'react';

import ProductPage from "./ProductPage";

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

    return (
        <section className="categoryPage">
            {/* empty {}jsx curlies to indicate the data that needs to go in there according to the API call. In our case, it will either say LIPS or EYES */}
            <h2>Category</h2>
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
            </ul>

            {/* {isClicked && <ProductPage/>} */}
        </section>
    )
}

export default CategoryPage;