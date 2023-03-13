import { Link } from 'react-router-dom';

export default function ProductCard({ products }) {

    console.log(products[0])

    const product_cards = products[0].products.map(product =>
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