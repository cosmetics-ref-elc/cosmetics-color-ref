import { Link } from 'react-router-dom';
import placeholderImg from "../assets/LandingPage/Lips.jpg";
import tempSwatch from "../assets/lips1-productpagecartswatch-desktop.png";
import { useGray } from "../context/ToggleGrayscale";

const ProductCard = ({ products }) => {
    const { isActive } = useGray();
    // console.log(products)
    const product_cards = products[0].products.map((product) => (
      <li key={product._id} id={product.name} className="prodCards">
        <Link to={"/product/" + product.name.toLowerCase()} state={product}>
          <div className="imgContainer">
            <img
              src={placeholderImg}
              //fill in alt text
              alt=""
              className="prodCardsImg"
              style={{ filter: isActive ? "grayscale(100%)" : "none" }}
            />
          </div>
          <div className="textContainer">
            <p>{product.brand}</p>
            <h3>{product.name}</h3>
            <p>Shades: {product.shades.length}</p>
            {/* for the swatch */}
          </div>
          <div className="swatchContainer">
            <img
              src={tempSwatch}
              alt=""
              className="fullSwatch"
              style={{ filter: isActive ? "grayscale(100%)" : "none" }}
            ></img>
          </div>
        </Link>
      </li>
    ));

    return (
        <div className="productCard">
            {product_cards}
        </div>
    )
}

export default ProductCard;