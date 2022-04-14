import { useContext } from "react";
import { ColorModeContext } from "./ColorModeProvider";

export const useColorMode = () => {
    const { colorMode } = useContext(ColorModeContext);
    return { colorMode };
};
