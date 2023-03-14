import { Link } from 'react-router-dom';
import placeholderImg from '../assets/LandingPage/Lips.jpg'
const CategoryCard = ({ categories }) => {
    const category_cards = categories.map((cat) => (
      <div key={cat._id} id={cat.name} className="catCards">
        <Link to={"/category/" + cat.name.toLowerCase()} state={cat}>
          {/* placeholder images for now */}
          <img src={placeholderImg} alt={cat.name} className="catCardsImg" />
          <h3>{cat.name}</h3>
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