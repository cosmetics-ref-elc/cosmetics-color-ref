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



  return (
    <section className="productPage">
      <div className="mainInfo">
        {/* Brand */}
        <p>{ }</p>
        {/* Product Name */}
        <p>{ }</p>
        {/* Color Name */}
        <h2>{ }</h2>

        {/* the DROPDOWN with the swatches here - sorry didn't have time for this */}
      </div>
      <div className="imageCarousel">
        {/* sorry, didn't have time to populate this section */}
      </div>
      <div className="colorTabs">
        {/* the 'tab' might need to be a button? */}
        <div className="tab">
          <h4>Color Description</h4>
          <p>{ }</p>
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
          <p>{ }</p>
        </div>
        <div className="infoSection">
          <h3>How to Use</h3>
          <p>{ }</p>
        </div>
        <div className="infoSection">
          <h3>Ingredients</h3>
          <p>{ }</p>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
