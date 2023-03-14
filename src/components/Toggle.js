import Switch from "react-switch";
import { useState } from "react";

const Toggle = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="switch">
        {/* https://github.com/markusenglund/react-switch#readme */}
        <label>
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
