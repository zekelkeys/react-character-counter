import { useContext } from "react";
import { TextStatsContext } from "../context/TextStatsContext";

function TextArea() {
    const { getCharacterCount } = useContext(TextStatsContext);
    return (
        <div>
            <label className="sr-only" htmlFor="text-input">
                Enter your text
            </label>
            <textarea
                className="h-50 w-full rounded-xl border-2 border-neutral-200 bg-neutral-100 p-5 text-lg text-neutral-700 placeholder-neutral-700 outline-none hover:bg-neutral-200 hover:text-neutral-900 focus:shadow-[0_0_0.625rem_#C27CF8] focus-visible:border-purple-500 focus-visible:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:text-neutral-200 dark:focus-visible:text-neutral-200 dark:focus-visible:hover:border-purple-500"
                id="text-input"
                placeholder="Start typing here… (or paste your text)"
                onChange={(event) => {
                    getCharacterCount(event.target.value);
                }}
            ></textarea>
        </div>
    );
}

export default TextArea;
