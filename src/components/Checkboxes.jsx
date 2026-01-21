function Checkboxes() {
    return (
        <div className="mt-4 mb-10 flex flex-col gap-3 md:flex-row md:gap-6 lg:mb-12">
            <label className="flex cursor-pointer items-center gap-[10px]">
                <input
                    className="pointer-events-none"
                    id="excludeSpaces"
                    type="checkbox"
                    name="excludeSpaces"
                />
                <span></span>
                <span className="trackiing-tiight text-base leading-tight">
                    Exclude Spaces
                </span>
            </label>

            <label className="flex cursor-pointer items-center gap-[10px]">
                <input
                    className="pointer-events-none"
                    type="checkbox"
                    name="setCharacterLimit"
                />
                <span></span>
                <span className="trackiing-tiight text-base leading-tight">
                    Set Character Limit
                </span>
            </label>

            <div className="trackiing-tiight text-base leading-tight md:ml-auto">
                Approx. reading time:{" "}
                <output
                    id="readingTime"
                    className="trackiing-tiight text-base leading-tight"
                >
                    0 minutes
                </output>
            </div>
        </div>
    );
}

export default Checkboxes;
