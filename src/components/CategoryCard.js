import { Link } from 'react-router-dom';
import { useGray } from "../context/ToggleGrayscale";
const CategoryCard = ({ categories }) => {

  const { isActive } = useGray();

  const category_cards = categories.map((cat) => (
    <li key={cat._id} id={cat.name} className="catCards">
      <Link to={"/category/" + cat.name.toLowerCase()} state={cat}>
        {/* placeholder images for now */}
        <img
          src={cat.img}
          alt={cat.name}
          className="catCardsImg"
          style={{ filter: isActive ? "grayscale(100%)" : "none" }}
        />
        <h4>{cat.name}</h4>
      </Link>
    </li>
  ));

    return (
        <div className="categoryCard">
            {category_cards}
        </div>
    )
}

export default CategoryCard;