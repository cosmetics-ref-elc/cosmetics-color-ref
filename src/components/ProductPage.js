import { useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { useGray } from "../context/ToggleGrayscale";
import ShadeList from "./ShadeList";
import ShadeImage from "./ShadeImage";
import Accordion from "./Accordion";

const ProductPage = () => {
  const { isActive } = useGray();
  const location = useLocation();
  const product = location.state;
  console.log(product);

  const [activeShade, setActiveShade] = useState(product.shades[0]);
  const [activeImage, setActiveImage] = useState("");
  const [activeTab, setActiveTab] = useState("colorDescription");

  const shadesRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(function () {
    shadesRef.current = product.shades;
    setActiveShade(shadesRef.current[0]);
  }, []);

  useEffect(() => {
    if (Object.keys(activeShade).length === 0) {
      return;
    }
    imagesRef.current = activeShade.img_urls;
    setActiveImage(imagesRef.current[0]);
  }, [activeShade]);

  return (
    <section className="productPage">
      <div className="mobileMainInfo">
        <p>{product.brand}</p>
        <h3>{product.name}</h3>
        {/* <h2>{activeShade?.name}</h2> */}
      </div>

      <div className="imagePart">
        <div className="displayImage">
          <img
            src={activeImage}
            alt={activeImage}
            className=""
            style={{ filter: isActive ? "grayscale(100%)" : "none" }}
          ></img>
        </div>

        <div className="imageCarousel">
          {/* sorry, didn't have time to populate this section */}
          <ShadeImage
            images={imagesRef.current}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
        </div>
      </div>

      <div className="textPart">
        <div className="mainInfo">
          <p>{product.brand}</p>
          <h3>{product.name}</h3>
          {/* <h2>{activeShade?.name}</h2> */}
        </div>

        <div className="dropdownMenu">
          <ShadeList
            shades={shadesRef.current}
            activeShade={activeShade}
            setActiveShade={setActiveShade}
          />
        </div>

        <div className="colorTabs">
          <div
            className={`tab ${
              activeTab === "colorDescription" ? "active" : ""
            }`}
            onClick={() => setActiveTab("colorDescription")}
          >
            <h4>Color Description</h4>
          </div>
          <div
            className={`tab ${activeTab === "colorStory" ? "active" : ""}`}
            onClick={() => setActiveTab("colorStory")}
          >
            <h4>Finding Earthy Tones</h4>
          </div>
          <div
            className={`tab ${
              activeTab === "colorSupportInfo" ? "active" : ""
            }`}
            onClick={() => setActiveTab("colorSupportInfo")}
          >
            <h4>Color Support Information</h4>
          </div>
        </div>

        {activeTab === "colorDescription" && (
          <div className="tabContent">
            <p>{activeShade.description}</p>
          </div>
        )}

        {activeTab === "colorStory" && (
          <div className="tabContent">
            <p>{activeShade.color_story}</p>
          </div>
        )}

        {activeTab === "colorSupportInfo" && (
          <div className="tabContent">
            {activeShade.color_support_info.map((info) => (
              <p>{info}</p>
            ))}
          </div>
        )}

        {/* <div className="colorTabs">
        <div className="tab">
          <h4>Color Description</h4>
          <p>{activeShade.description}</p>
        </div>
        <div className="tab">
          <h4>Finding Earthy Tones</h4>
          <p>{activeShade.color_story}</p>
        </div>
        <div className="tab">
          <h4>Color Support Information</h4>
          {activeShade.color_support_info.map(info =>
            <p>{info}</p>
          )}
        </div>
      </div> */}

        <div className="otherInfo">
          {/* <div className="infoSection">
          <h3>Product Description</h3>
          {product.description.map(info =>
            <p>{info}</p>
          )}
        </div>
        <div className="infoSection">
          <h3>How to Use</h3>
          {product.usage.map(info =>
            <p>{info}</p>
          )}
        </div>
        <div className="infoSection">
          <h3>Ingredients</h3>
          <p>{product.ingredients}</p>
        </div> */}
          <Accordion
            title="Product Description"
            content={product.description.map((info) => (
              <p>{info}</p>
            ))}
          />
          <Accordion
            title="How to Use"
            content={product.usage.map((info) => (
              <p>{info}</p>
            ))}
          />
          <Accordion
            title="Ingredients"
            content={<p>{product.ingredients}</p>}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;