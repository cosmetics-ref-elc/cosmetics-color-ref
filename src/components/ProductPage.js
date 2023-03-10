import { useLocation } from "react-router";
import { useState, useEffect, useRef } from 'react';
// import * as productsAPI from '../utilities/products-api';



// ProductPage psuedocode (one page for ALL products)
// - Brand Name
// - Product Name 
// - Color Name
// - Product Description
// - How to use
// - Ingredients
// - Shades: (onChange)
//     - Color Name
//     - Swatch Image 
//     - Color Alt Name
//     - Color Description
//     - Finding earthy tones
//     - Color Support Information
//     - 5 different images 


// import { useState } from "react";

const ProductPage = () => {

  const location = useLocation()
  const product = location.state;
  console.log(product)

  const [activeShade, setActiveShade] = useState({});
  const shadesRef = useRef([])

  console.log(product.shades)
  useEffect(function () {
    shadesRef.current = [...product.shades]
    console.log("This is shadesRef " + shadesRef.current)
    setActiveShade(shadesRef.current[0])
  }, [])

  return (
    <section className="productPage">
      <h2>{product.name}</h2>
      <div className="mainInfo">
        {/* Brand */}
        <p>{product.brand}</p>
        {/* Product Name */}
        <p>{ }</p>
        {/* Color Name */}
        <h2>{shadesRef.current.name}</h2>

        {/* the DROPDOWN with the swatches here - sorry didn't have time for this */}
      </div>
      <div className="imageCarousel">
        {/* sorry, didn't have time to populate this section */}
      </div>
      <div className="colorTabs">
        {/* the 'tab' might need to be a button? */}
        <div className="tab">
          <h4>Color Description</h4>
          <p>{shadesRef.current.description}</p>
        </div>
        <div className="tab">
          <h4>Finding Earthy Tones</h4>
          <p>{ }</p>
        </div>
        <div className="tab">
          <h4>Color Support Information</h4>
          <p>{ }</p>
        </div>
      </div>
      <div className="otherInfo">
        <div className="infoSection">
          <h3>Product Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="infoSection">
          <h3>How to Use</h3>
          <p>{product.usage}</p>
        </div>
        <div className="infoSection">
          <h3>Ingredients</h3>
          <p>{product.ingredients}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
