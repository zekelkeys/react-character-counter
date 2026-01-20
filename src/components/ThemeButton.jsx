function ThemeButton({ theme, toggleTheme }) {
    return (
        <button
            className="grid h-8 w-8 cursor-pointer place-items-center rounded-sm bg-neutral-100 bg-[url('./assets/images/icon-moon.svg')] bg-cover bg-size-[1.25rem] bg-center bg-no-repeat md:h-11 md:w-11 md:rounded-md md:bg-size-[1.375rem] dark:bg-neutral-700 dark:bg-[url('./assets/images/icon-sun.svg')]"
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
