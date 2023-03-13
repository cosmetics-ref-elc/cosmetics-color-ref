import { Link } from 'react-router-dom';

export default function ProductCard({ products }) {

    const product_cards = products.map(product =>
        <div
            key={product._id}
            className={product.name}
        >
            <h1>{product.name}</h1>
            <button><Link to={"/products/" + product.name.toLowerCase()} state={product}>Go To Product</Link></button>
        </div >
    );

    return (
        <div className="CategoryCard">
            {product_cards}
        </div>
    )
}