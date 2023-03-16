import { Link } from 'react-router-dom';
import { useGray } from "../context/ToggleGrayscale";

const ProductCard = ({ products }) => {
    const { isActive } = useGray();
    
    const product_cards = products[0].products.map((product) => (
      <li key={product._id} id={product.name} className="prodCards">
        <Link to={"/product/" + product.name.toLowerCase()} state={product}>
          <div className="imgContainer">
            <img
              src={product.img}
              alt={product.name}
              className="prodCardsImg"
              style={{ filter: isActive ? "grayscale(100%)" : "none" }}
            />
          </div>
          <div className="textContainer">
            <p>{product.brand}</p>
            <h3>{product.name}</h3>
            <p>Shades: {product.shades.length}</p>
          </div>
          <div className="swatchContainer">
            <img
              src={product.swatch_img}
              alt={product.name}
              className="fullSwatch productCardsSwatchImg"
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