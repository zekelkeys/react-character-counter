import { useState } from "react";
import "../index.css";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import Wrapper from "./Wrapper";
import TextArea from "./TextArea";
import Checkboxes from "./Checkboxes";
import StatsCards from "./StatsCards";

function App() {
    const [text, setText] = useState("00");

    const [countSpaces, setCountSpaces] = useState(false);

    function setCharacterCount(area) {
        setText(area.length === 0 ? "00" : area.length);
    }

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
                    <TextArea setCharacterCount={setCharacterCount} />
                    <Checkboxes
                        countSpaces={countSpaces}
                        setCountSpaces={setCountSpaces}
                    />
                    <StatsCards
                        characterCount={text}
                        countSpaces={countSpaces}
                    />
                </main>
            </div>
        </Wrapper>
    );
}

export default App;
