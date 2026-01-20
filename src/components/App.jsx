import "../index.css";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import Wrapper from "./Wrapper";

function App() {
    return (
        <Wrapper>
            <div className="m-auto max-w-[61.875rem]">
                <header className="flex items-center justify-between">
                    <Logo />
                    <ThemeButton />
                </header>
                <main>
                    <h1 className="py-10 lg:py-12">
                        Analyze your text in real-time.
                    </h1>
                </main>
            </div>
        </Wrapper>
    );
}

export default App;
