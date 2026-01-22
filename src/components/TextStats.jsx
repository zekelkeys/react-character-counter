function TextStats() {
    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-2 rounded-xl bg-purple-400 bg-[url('./assets/images/pattern-character-count.svg')] bg-[right_-3.125rem_center] bg-no-repeat px-5 py-7 md:bg-[right_-4.375rem_center] md:px-3 md:py-6 lg:bg-[right_-1.875rem_center] lg:px-4">
                <output className="text-2xl leading-none font-bold tracking-tighter text-neutral-900 md:text-3xl">
                    278
                </output>
                <span className="text-lg leading-snug tracking-tight text-neutral-900">
                    Total Characters<span></span>
                </span>
            </div>
            <div className="flex w-full flex-col gap-2 rounded-xl bg-yellow-500 bg-[url('./assets/images/pattern-word-count.svg')] bg-[right_-3.125rem_center] bg-no-repeat px-5 py-7 md:bg-[right_-4.375rem_center] md:px-3 md:py-6 lg:bg-[right_-1.875rem_center] lg:px-4">
                <output className="text-2xl leading-none font-bold tracking-tighter text-neutral-900 md:text-3xl">
                    39
                </output>{" "}
                <span className="text-lg leading-snug tracking-tight text-neutral-900">
                    Word Count
                </span>
            </div>
            <div className="flex w-full flex-col gap-2 rounded-xl bg-orange-500 bg-[url('./assets/images/pattern-sentence-count.svg')] bg-[right_-3.125rem_center] bg-no-repeat px-5 py-7 md:bg-[right_-4.375rem_center] md:px-3 md:py-6 lg:bg-[right_-1.875rem_center] lg:px-4">
                <output className="text-2xl leading-none font-bold tracking-tighter text-neutral-900 md:text-3xl">
                    04
                </output>{" "}
                <span className="text-lg leading-snug tracking-tight text-neutral-900">
                    Sentence Count
                </span>
            </div>
        </div>
    );
}

export default TextStats;
