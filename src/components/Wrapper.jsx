function Wrapper({ theme, children }) {
    return (
        <div
            className={`${theme === "light" ? "light" : "dark"} min-h-screen w-full bg-[url('./assets/images/bg-light-theme.png')] bg-cover bg-center bg-no-repeat px-4 pt-4 md:px-8 md:pt-8 dark:bg-[url('./assets/images/bg-dark-theme.png')]`}
        >
            {children}
        </div>
    );
}

export default Wrapper;
