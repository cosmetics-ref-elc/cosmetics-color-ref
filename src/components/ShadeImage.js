import { useGray } from "../context/ToggleGrayscale";

const ShadeImage = ({ images, activeImage, setActiveImage }) => {

    const { isActive } = useGray();

    const handleImageClick = (image) => {
        setActiveImage(image);
    };

    const currentShadeImgs = images.map((url, index) => (
        <img
            key={index}
            src={url}
            alt={url}
            className="currShadeImgs"
            style={{
                width: "30px",
                height: "30px",
                filter: isActive ? "grayscale(100%)" : "none",
                border: activeImage === url ? "2px solid black" : "none",
            }}
            onClick={() => handleImageClick(url)}
        />
    ));

    return (
        <div className="shadeImgs">
            {currentShadeImgs}
        </div>
    )
}

export default ShadeImage;