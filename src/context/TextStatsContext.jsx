import { createContext, useState } from "react";

export const TextStatsContext = createContext(null);

function TextStatsContextProvider({ children }) {
    const [characterCount, setCharacterCount] = useState("00");

    const [countSpaces, setCountSpaces] = useState(false);

    function getCharacterCount(textAreaText) {
        setCharacterCount(
            textAreaText.length === 0 ? "00" : textAreaText.length,
        );
    }
    return (
        <TextStatsContext.Provider
            value={{
                characterCount,
                setCharacterCount,
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
