import "../index.css";
import TextStatsContextProvider from "../context/TextStatsContext";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import TextArea from "./TextArea";
import StatsCards from "./StatsCards";
import ExcludeSpaces from "./ExcludeSpaces";
import CharacterLimit from "./CharacterLimit";
import ReadingTime from "./ReadingTime";

function App() {
    return (
        <div className="min-h-screen w-full bg-[url('./assets/images/bg-light-theme.png')] bg-cover bg-center bg-no-repeat px-4 pt-4 font-dm-sans md:px-8 md:pt-8 dark:bg-[url('./assets/images/bg-dark-theme.png')]">
            <div className="m-auto max-w-[61.875rem]">
                <header className="flex items-center justify-between">
                    <Logo />
                    <ThemeButton />
                </header>
                <main>
                    <h1 className="mx-auto my-10 max-w-[530px] text-center text-2xl leading-none font-bold tracking-tighter text-neutral-900 md:text-3xl lg:my-12 dark:text-neutral-100">
                        Analyze your text in real-time.
                    </h1>
                    <TextStatsContextProvider>
                        <TextArea />
                        <div className="mt-4 mb-10 flex flex-col gap-3 text-neutral-900 md:flex-row md:gap-6 lg:mb-12 dark:text-neutral-200">
                            <ExcludeSpaces />
                            <CharacterLimit />
                            <ReadingTime />
                        </div>
                        <StatsCards />
                    </TextStatsContextProvider>
                    <section>
                        <h2 className="text-xl leading-tight font-semibold tracking-tighter">
                            Letter Density
                        </h2>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
