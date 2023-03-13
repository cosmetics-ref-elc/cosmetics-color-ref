import { Link } from 'react-router-dom';

export default function CategoryCard({ categories }) {

    const category_cards = categories.map(cat =>
        <div
            key={cat._id}
            className={cat.name}
        >
            <h1>{cat.name}</h1>
            <button><Link to={"/category/" + cat.name.toLowerCase()} state={cat}>{cat.name}</Link></button>
        </div >
    );

    return (
        <div className="CategoryCard">
            {category_cards}
        </div>
    )
}