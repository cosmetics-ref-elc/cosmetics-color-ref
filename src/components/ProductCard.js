import { Link } from 'react-router-dom';

export default function ProductCard({ products }) {

    console.log(products)
    const product_cards = products[0].products.map(product =>
        <li
            key={product._id}
            className={product.name}
        >
            <h1>{product.name}</h1>
            <button><Link to={"/product/" + product.name.toLowerCase()} state={product}>Go To Product</Link></button>
        </li >
    );

    return (
        <>
            {product_cards}
        </>
    )
}