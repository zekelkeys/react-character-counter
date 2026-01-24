import ExcludeSpaces from "./ExcludeSpaces";
import CharacterLimit from "./CharacterLimit";
import ReadingTime from "./ReadingTime";

function Checkboxes() {
    return (
        <div className="mt-4 mb-10 flex flex-col gap-3 text-neutral-900 md:flex-row md:gap-6 lg:mb-12 dark:text-neutral-200">
            <ExcludeSpaces />
            <CharacterLimit />
            <ReadingTime />
        </div>
    );
}

export default Checkboxes;
