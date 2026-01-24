import { useState, useContext } from "react";
import { TextStatsContext } from "../context/TextStatsContext";

function Checkboxes() {
    const [characterLimit, setCharacterLimit] = useState(false);
    const { excludeSpaces, setExcludeSpaces } = useContext(TextStatsContext);
    return (
        <div className="mt-4 mb-10 flex flex-col gap-3 text-neutral-900 md:flex-row md:gap-6 lg:mb-12 dark:text-neutral-200">
            <label className="group flex cursor-pointer items-center gap-2.5">
                <input
                    className="peer absolute cursor-pointer opacity-0"
                    type="checkbox"
                    checked={excludeSpaces}
                    aria-expanded={excludeSpaces}
                    aria-controls="space-count"
                    onChange={(event) => setExcludeSpaces(event.target.checked)}
                />
                <span className="h-4 w-4 rounded-xs border-1 border-neutral-900 bg-transparent bg-cover bg-center bg-no-repeat group-hover:border-purple-500 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:bg-[url('./assets/images/icon-check.svg')] group-hover:peer-checked:border-purple-500 group-hover:peer-checked:bg-purple-500 peer-focus-visible:border-neutral-200 peer-focus-visible:bg-white peer-focus-visible:shadow-[0_0_0_0.125rem_#FFFFFF,0_0_0_0.25rem_#D3A0FA] peer-checked:peer-focus-visible:border-purple-400 peer-focus-visible:peer-checked:bg-purple-400 dark:border-neutral-200"></span>
                <span className="text-base leading-tight tracking-tight">
                    Exclude Spaces
                </span>
            </label>

            <div className="flex items-center">
                <label className="group flex cursor-pointer items-center gap-2.5">
                    <input
                        className="peer absolute cursor-pointer opacity-0"
                        type="checkbox"
                        aria-controls="character-limit"
                        aria-expanded={characterLimit}
                        checked={characterLimit}
                        onChange={(event) => {
                            setCharacterLimit(event.target.checked);
                        }}
                    />
                    <span className="h-4 w-4 rounded-xs border-1 border-neutral-900 bg-transparent bg-cover bg-center bg-no-repeat group-hover:border-purple-500 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:bg-[url('./assets/images/icon-check.svg')] group-hover:peer-checked:border-purple-500 group-hover:peer-checked:bg-purple-500 peer-focus-visible:border-neutral-200 peer-focus-visible:bg-white peer-focus-visible:shadow-[0_0_0_0.125rem_#FFFFFF,0_0_0_0.25rem_#D3A0FA] peer-checked:peer-focus-visible:border-purple-400 peer-focus-visible:peer-checked:bg-purple-400 dark:border-neutral-200"></span>
                    <span className="text-base leading-tight tracking-tight">
                        Set Character Limit
                    </span>
                </label>

                <div>
                    <label className="sr-only" htmlFor="character-limit">
                        Character limit
                    </label>

                    {characterLimit && (
                        <input
                            className="ml-2.5 h-[1.813rem] w-[3.438rem] [appearance:textfield] rounded-sm border-1 border-neutral-600 px-3 py-1 text-base leading-tight tracking-tight text-neutral-900 focus-visible:border-purple-500 focus-visible:shadow-[0_0_0.625rem_#C27CF8] focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:outline-none dark:text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            id="character-limit"
                            type="number"
                        />
                    )}
                </div>
            </div>

            <div className="flex items-center text-base leading-tight tracking-tight md:ml-auto">
                Approx. reading time
                <output className="trackiing-tiight text-base leading-tight">
                    {": 0 minutes"}
                </output>
            </div>
        </div>
    );
}

export default Checkboxes;
