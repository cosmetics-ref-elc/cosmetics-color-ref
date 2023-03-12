import { Link } from "react-router-dom";

export default function CategoryCard({ categories }) {

    const category_cards = categories.map(cat =>
        <div
            key={cat}
            className={cat}
        >
            <h1>{cat}</h1>
            <button><Link to="/category-page">{cat}</Link></button>
        </div>
    );

    return (
        <div className="CategoryCard">
            {category_cards}
        </div>
    )
}