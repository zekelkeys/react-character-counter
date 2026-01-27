import { useEffect, useState } from "react";

function ThemeButton() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        return prefersDark ? "dark" : "light";
    });
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <button
            className="grid h-8 w-8 cursor-pointer place-items-center rounded-sm bg-neutral-100 bg-[url('./assets/images/icon-moon.svg')] bg-cover bg-size-[1.25rem] bg-center bg-no-repeat hover:bg-neutral-200 focus-visible:shadow-[0_0_0.625rem_#C27CF8] focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none md:h-11 md:w-11 md:rounded-md md:bg-size-[1.375rem] dark:bg-neutral-700 dark:bg-[url('./assets/images/icon-sun.svg')] dark:hover:bg-neutral-600"
            onClick={toggleTheme}
            type="button"
            aria-label={
                theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
            }
            aria-pressed={theme === "dark"}
        ></button>
    );
}

export default ThemeButton;
