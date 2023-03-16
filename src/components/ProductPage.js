import { useLocation } from "react-router";
import { useState, useEffect, useRef } from 'react';
import ShadeList from './ShadeList'

const ProductPage = () => {

  const location = useLocation()
  const product = location.state;
  console.log(product)

  const [activeShade, setActiveShade] = useState({});
  const shadesRef = useRef([])

  useEffect(
    function () {
      shadesRef.current = product.shades;
      setActiveShade(shadesRef.current[0]);
    },
    [product.shades]
  );

  return (
    <section className="productPage">
      <p>{product.brand}</p>
      <h3>{product.name}</h3>

      <div className="mainInfo">

        <h2>{activeShade.name}</h2>

        {/* the DROPDOWN with the swatches here - sorry didn't have time for this */}
        {/* <ShadeList
          shades={shadesRef.current}
          activeShade={activeShade}
          setActiveShade={setActiveShade}
        /> */}
      </div>
      <div className="imageCarousel">
        {/* sorry, didn't have time to populate this section */}
      </div>
      <div className="colorTabs">
        {/* the 'tab' might need to be a button? */}
        <div className="tab">
          <h4>Color Description</h4>
          {/* <p>{shadesRef.current.description}</p> */}
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
