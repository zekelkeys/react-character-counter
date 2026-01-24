import ExcludeSpaces from "./ExcludeSpaces";
import CharacterLimit from "./CharacterLimit";

function Checkboxes() {
    return (
        <div className="mt-4 mb-10 flex flex-col gap-3 text-neutral-900 md:flex-row md:gap-6 lg:mb-12 dark:text-neutral-200">
            <ExcludeSpaces />
            <CharacterLimit />
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
