import { createContext, useState } from "react";

export const TextStatsContext = createContext(null);

function TextStatsContextProvider({ children }) {
    const [text, setText] = useState("");
    const [excludeSpaces, setExcludeSpaces] = useState(false);

    return (
        <TextStatsContext.Provider
            value={{
                text,
                setText,

                excludeSpaces,
                setExcludeSpaces,
            }}
        >
            {children}
        </TextStatsContext.Provider>
    );
}

export default TextStatsContextProvider;
