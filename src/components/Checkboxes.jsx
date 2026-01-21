function Checkboxes() {
    return (
        <div className="mt-4 mb-10 lg:mb-12">
            <label class="checkbox">
                <input
                    id="excludeSpaces"
                    class="checkbox__input"
                    type="checkbox"
                    name="excludeSpaces"
                    autocomplete="off"
                />
                <span></span>
                <span>Exclude Spaces</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="setCharacterLimit"
                    autocomplete="off"
                />
                <span></span>
                <span>Set Character Limit</span>
            </label>
            <div>
                Approx. reading time:{" "}
                <output id="readingTime">0 minutes</output>
            </div>
        </div>
    );
}

export default Checkboxes;
