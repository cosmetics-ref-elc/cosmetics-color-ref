import smokeAndBrightenProduct from "../assets/smokeAndBrightenDarkChoc.jpg";
// need new color combinations; just using as a placeholder for now 
import no002 from "../assets/002colorCombination.png";
import { useState } from "react";

const SmokeAndBrighten = () => {

    const [selectValue, setSelectValue] = useState(
      "Dark Chocolate/Rich Bronze"
    );
    const [openContent, setOpenContent] = useState(false);

    const changeColor = (e) => {
        const value = e.target.value;
        setSelectValue(value);
    }

    const clickToExpand = () => {
        setOpenContent(!openContent)
    }
  return (
    <div className="smokeAndBrighten">
      {/* can probably unify classnames so it applies to all the products; doesn't have to be different for each product?  */}
      <div className="pureColorImgContainer">
        <img
          src={smokeAndBrightenProduct}
          alt="smoke and brighten product"
          className="pureColorProduct"
        />
      </div>

      <h2>Smoke and Brighten Kajal</h2>
      <h2>Eyeliner Duo</h2>

      {/* This needs to be formatted in some kind of conditional so it shows up according to the selected value  */}
      <div className="colorCombinations">
        {/* change class names to be unified, and when all color combination images are generated */}
        <div className="colorCombination 002">
          <img src={no002} alt="002 COSMIC CRYSTAL" />
        </div>

        <div className="colorCombination 004">
          <img src={no002} alt="004 CARING CRYSTAL" />
        </div>
      </div>

      <form>
        <label htmlFor="002cosmicCrystal"></label>
        <select
          onChange={changeColor}
          name="colors"
          id="colors"
          className="colors"
        >
          <option value="Dark Chocolate/Rich Bronze">
            Dark Chocolate/Rich Bronze
          </option>
          <option value="Marine/Sky Blue">Marine/Sky Blue</option>
          <option value="Bordeaux/Ivory">Bordeaux/Ivory</option>
          <option value="Noir/Cream">Noir/Cream</option>
        </select>
      </form>

      {/* This will change the h3 according to the selected value   */}
      {selectValue && <h3 className="004">{selectValue}</h3>}

      {/* will be adding more colors*/}

      <div className="info">
        {" "}
        {/* need to add a drop down to show more contents (same as offcial website) */}
        <div>
          <h4>How to use <button onClick={clickToExpand}>✚</button></h4>
            {openContent
                ? <div className="howToUse">
                    <p>Get the Estée Lauder “Eyes Wide Open” Look: </p>
                    <p>
                        Define: Draw along the lash line with the darker Eye Defining shade
                        to accentuate eye shape. Smudge with fingers or brush for a smokier
                        look.
                    </p>
                    <p>
                        Illuminate: Apply the brighter Eye Illuminating shade along the
                        waterline to make your eyes look more awake, open, and bright. Pop
                        some on the inner corner to enhance even more.{" "}
                    </p>
                    <p>
                        Feeling creative? Mix, match & customize your look however you want!
                        Both shades are waterline safe so you can Smoke and Brighten, your
                        way.
                    </p>
                </div>
                : null
            }
        </div>
        <div>
          <h4>Ingredients <button onClick={clickToExpand}>✚</button></h4>
            {openContent
                ? <div className="ingredients">
                    <p>Ingredients: Dimethicone, Synthetic Wax, Silica, Stearyl
                    Dimethicone, Caprylic/Capric Triglyceride,
                    Trimethylsiloxysilicate/Dimethiconol Crosspolymer, Octadecene,
                    Dimethicone/Vinyl Dimethicone Crosspolymer, Isoceteth-10,
                    Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, [+/- Mica,
                    Iron Oxides (Ci 77491), Iron Oxides (Ci 77492), Iron Oxides (Ci
                    77499), Ferric Ferrocyanide (Ci 77510), Yellow 5 Lake (Ci 19140),
                    Manganese Violet (Ci 77742), Blue 1 Lake (Ci 42090), Titanium
                    Dioxide (Ci 77891), Ferric Ammonium Ferrocyanide (Ci 77510),
                    Chromium Oxide Greens (Ci 77288), Chromium Hydroxide Green (Ci
                    77289), Carmine (Ci 75470), Aluminum Powder (Ci 77000), Ultramarines
                    (Ci 77007)] Rds Product Name: Smoke And Brighten Kajal Eyeliner 2
                    Division: El (Estée Lauder)Ingredients: Dimethicone, Synthetic Wax,
                    Silica, Stearyl Dimethicone, Caprylic/Capric Triglyceride,
                    Trimethylsiloxysilicate/Dimethiconol Crosspolymer, Octadecene,
                    Dimethicone/Vinyl Dimethicone Crosspolymer, Pentaerythrityl
                    Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Isoceteth-10, [+/- Mica,
                    Iron Oxides (Ci 77491), Iron Oxides (Ci 77492), Iron Oxides (Ci
                    77499), Ferric Ferrocyanide (Ci 77510), Chromium Oxide Greens (Ci
                    77288), Manganese Violet (Ci 77742), Ferric Ammonium Ferrocyanide
                    (Ci 77510), Yellow 5 Lake (Ci 19140), Blue 1 Lake (Ci 42090),
                    Titanium Dioxide (Ci 77891), Aluminum Powder (Ci 77000), Chromium
                    Hydroxide Green (Ci 77289), Carmine (Ci 75470), Ultramarines (Ci
                    77007)] [ILN42746, 42757]</p>
                </div>
                :null
            }
        </div>
      </div>

      <div className="altName refernceInfo">
        <h4>Alt Name:</h4>
        <p>Apricot Delight</p>
      </div>

      <div className="description refernceInfo">
        <h4>Description:</h4>
        <p>
          This color is a muted, warm pink with a slightly grayish undertone. It
          can be a great option for adding a soft, romantic touch with a subtle
          hint of sweetness to your makeup look.
        </p>
      </div>

      <div className="earthHue refernceInfo">
        <h4>Finding Earthy Hues:</h4>
        <p>
          One plant that comes to mind when thinking of the color #d5a397 is the
          apricot tree, which produces sweet and juicy fruits that have a
          similar warm and inviting tone to this color. The tree's bark and
          branches also have a woody brown color that complements the soft
          peachy hues of the fruit.
        </p>
      </div>

      <div className="supportInfo refernceInfo">
        <h4>Color Support Info</h4>
      </div>
    </div>
  );
};

export default SmokeAndBrighten;
