import { Link } from 'react-router-dom';

export default function ProductCard({ products }) {

    console.log(products)
    const product_cards = products[0].products.map(product =>
        <li
            key={product._id}
            className={product.name}
        >
            <Link to={"/product/" + product.name.toLowerCase()} state={product}>
                <h1>{product.name}</h1>
                <h2>{product.brand}</h2>
                <p>Shades: {product.shades.length}</p>
            </Link>
        </li >
    );

    return (
        <>
            {product_cards}
        </>
    )
}