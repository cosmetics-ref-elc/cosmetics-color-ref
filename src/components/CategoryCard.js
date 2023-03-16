import { Link } from 'react-router-dom';
import placeholderImg from '../assets/LandingPage/Lips.jpg';
import { useGray } from "../context/ToggleGrayscale";
const CategoryCard = ({ categories }) => {

  const { isActive } = useGray();

  const category_cards = categories.map((cat) => (
    <div key={cat._id} id={cat.name} className="catCards">
      <Link to={"/category/" + cat.name.toLowerCase()} state={cat}>
        {/* placeholder images for now */}
        <img
          src={placeholderImg}
          alt={cat.name}
          className="catCardsImg"
          style={{ filter: isActive ? "grayscale(100%)" : "none" }}
        />
        <h4>{cat.name}</h4>
      </Link>
    </div>
  ));

    return (
        <div className="categoryCard">
            {category_cards}
        </div>
    )
}

export default CategoryCard;