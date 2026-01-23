import { useState } from "react";
import "../index.css";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import Wrapper from "./Wrapper";
import TextArea from "./TextArea";
import Checkboxes from "./Checkboxes";
import StatsCards from "./StatsCards";
import TextStatsContextProvider from "../context/TextStatsContext";

function App() {
    return (
        <Wrapper>
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
                        <Checkboxes />
                        <StatsCards />
                    </TextStatsContextProvider>
                </main>
            </div>
        </Wrapper>
    );
}

export default App;
