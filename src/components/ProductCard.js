import { Link } from 'react-router-dom';
import { useGray } from "../context/ToggleGrayscale";

export default function ProductCard({ products }) {

    const { isActive } = useGray();


    const product_cards = products[0].products.map(product =>
        <div
            key={product._id}
            className="productCards"
        >
            <Link to={"/product/" + product.name.toLowerCase()} state={product}>
                <img
                    // src={placeholderImg}
                    // src={images[cat.name.toLowerCase()]}
                    src={product.img}
                    alt={product.name}
                    className="productCardsImg"
                    style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                />
                <h3>{product.name}</h3>
                <h4>{product.brand}</h4>
                <p>{product.shades.length} Shades</p>
                <img
                    // src={placeholderImg}
                    // src={images[cat.name.toLowerCase()]}
                    src={product.swatch_img}
                    alt={product.name}
                    className="productCardsSwatchImg"
                    style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                />
            </Link>
        </div >
    );

    return (
        <div className="productCard">
            {product_cards}
        </div>
    )
}