import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to="/category-page">Product Category</Link>
                </li>
                <li>Greyscale
                    {/* add better greyscale toggle button */}
                    <button>toggle</button>
                </li>
            </ul>
        </nav>
    );
}
    
export default NavBar;