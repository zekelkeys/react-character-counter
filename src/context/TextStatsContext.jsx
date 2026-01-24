import { createContext, useState } from "react";

export const TextStatsContext = createContext(null);

function TextStatsContextProvider({ children }) {
    const [text, setText] = useState("");
    const [excludeSpaces, setExcludeSpaces] = useState(false);

    const characterCount = excludeSpaces
        ? text.replace(/\s+/g, "").length
        : text.length;

    return (
        <TextStatsContext.Provider
            value={{
                text,
                setText,

                excludeSpaces,
                setExcludeSpaces,

                characterCount,
            }}
        >
            {children}
        </TextStatsContext.Provider>
    );
}

export default TextStatsContextProvider;

// function removeWhitespace(str) {
//     return str.replace(/\s+/g, "");
// }
// function getCharacterCount() {
//     console.log(text);
//     setCharacterCount(text.length === 0 ? "00" : text.length);
// }
