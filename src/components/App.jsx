import { useState } from "react";
import "../index.css";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import Wrapper from "./Wrapper";

function App() {
    const [theme, setTheme] = useState("light");
    function toggleTheme() {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return (
        <Wrapper theme={theme}>
            <div className="m-auto max-w-[61.875rem]">
                <header className="flex items-center justify-between">
                    <Logo />
                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                </header>
            </div>
        </Wrapper>
    );
}

export default App;
