import Switch from "react-switch";
import { useState } from "react";
import { useGray } from "../context/ToggleGrayscale";

const Toggle = () => {
  const { handleGray, isActive } = useGray();
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    handleGray();
  };

  return (
    <div className="switch">
      {isActive
        ? <p>Color</p>
        : <p>Grayscale</p>
      }
      <label>
        <span className="sr-only">Switch to toggle between Grayscale and Color</span>
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#000"
          className="reactSwitch"
        />
      </label>
    </div>
  );
};

export default Toggle;
