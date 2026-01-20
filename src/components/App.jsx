import { useEffect, useState } from "react";
import "../index.css";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import Wrapper from "./Wrapper";

function App() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        setTheme(savedTheme ?? (prefersDark ? "dark" : "light"));
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
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
