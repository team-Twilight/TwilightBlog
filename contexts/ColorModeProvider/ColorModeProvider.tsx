import { createContext } from "react";

export type ColorModeContextType = {
    colorMode: "white" | "black";
};

export const ColorModeContext = createContext<ColorModeContextType>({
    colorMode: "white",
});

const ColorModeProvider: React.FC = ({ children }) => {
    // TODO 시간이 낮이냐 밤이냐 따라서 다른 초기값을 줘볼까아?
    return (
        <ColorModeContext.Provider value={{ colorMode: "white" }}>
            {children}
        </ColorModeContext.Provider>
    );
};

export default ColorModeProvider;
