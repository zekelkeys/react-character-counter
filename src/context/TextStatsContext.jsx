import { createContext, useState } from "react";

export const TextStatsContext = createContext(null);

function TextStatsContextProvider({ children }) {
    const [text, setText] = useState("00");
    const [countSpaces, setCountSpaces] = useState(false);

    function getCharacterCount(area) {
        setText(area.length === 0 ? "00" : area.length);
    }
    return (
        <TextStatsContext.Provider
            value={{
                text,
                setText,
                countSpaces,
                setCountSpaces,
                getCharacterCount,
            }}
        >
            {children}
        </TextStatsContext.Provider>
    );
}

export default TextStatsContextProvider;
