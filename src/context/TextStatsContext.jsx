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
