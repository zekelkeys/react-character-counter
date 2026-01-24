import { useContext } from "react";
import { TextStatsContext } from "../context/TextStatsContext";

function ExcludeSpaces() {
    const { excludeSpaces, setExcludeSpaces } = useContext(TextStatsContext);
    return (
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
    );
}

export default ExcludeSpaces;
