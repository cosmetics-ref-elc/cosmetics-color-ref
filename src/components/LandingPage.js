import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import CategoryPage from './CategoryPage';

// LandingPage pseudocode
// - when user clicks on the category, API is called (take the name of the category and send it with the API)
// - this opens up the category page (pg 2)
// (onClick)

const LandingPage = () => {
    const [isClicked, setIsClicked] = useState(false);
    // Not sure how the API works so not sure if we need two separate functions where one goes to EYES and the other goes to LIPS 
    const handleCategoriesClick = () => {
        // assume this needs to have the API call somewhere in here? 
        setIsClicked(true);
        // I assume we want to "offload" the categories off when it's clicked and we proceed to the product page, right? In that case, maybe we should refactor and create a separate component for the category Cards so that we can get them offloaded when this function fires. 
        // right now, kept it simple and each components just loads to right below the previous component. 
    }

    return (
      <section className="landingPage">
        <header>
          <Link to="/">
            <h1>Chrōma</h1>
          </Link>
          <NavBar />
        </header>

        <div className="categories">
          {/* should eventually be some kind of links (need to be custom??), but keeping it simple as divs for now - we need it to be like a custom link almost (see my note in App.js) */}
          <div className="categoryCard" onClick={handleCategoriesClick}>
            Eyes
          </div>
          <div className="categoryCard" onClick={handleCategoriesClick}>
            Lips
          </div>
        </div>
        {isClicked && <CategoryPage />}
      </section>
    );
}

export default LandingPage;