import { createContext, useContext, useState } from "react";

const GrayScaleContext = createContext();

export function ToggleGrayscale({ children }) {
    const [isActive, setIsActive] = useState(false);
    const handleGray = () => {
        setIsActive((current) => !current);
    }

    return (
      <GrayScaleContext.Provider
        value={{ isActive, setIsActive, handleGray }}
        >
            {children}
      </GrayScaleContext.Provider>
    );
};

export function useGray() {
    return useContext(GrayScaleContext);
}
