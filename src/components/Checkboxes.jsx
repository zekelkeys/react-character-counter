function Checkboxes() {
    return (
        <div className="mt-4 mb-10 flex flex-col gap-3 text-neutral-900 md:flex-row md:gap-6 lg:mb-12 dark:text-neutral-200">
            <label className="group flex cursor-pointer items-center gap-[10px]">
                <input
                    className="peer absolute cursor-pointer opacity-0"
                    type="checkbox"
                />
                <span className="h-4 w-4 rounded-xs border-1 border-neutral-900 bg-transparent bg-cover bg-center bg-no-repeat group-hover:border-purple-500 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:bg-[url('./assets/images/icon-check.svg')] group-hover:peer-checked:border-purple-500 group-hover:peer-checked:bg-purple-500 peer-focus-visible:border-neutral-200 peer-focus-visible:bg-white peer-focus-visible:shadow-[0_0_0_0.125rem_#FFFFFF,0_0_0_0.25rem_#D3A0FA] peer-checked:peer-focus-visible:border-purple-400 peer-focus-visible:peer-checked:bg-purple-400 dark:border-neutral-200"></span>
                <span className="text-base leading-tight tracking-tight">
                    Exclude Spaces
                </span>
            </label>

            <label className="group flex cursor-pointer items-center gap-[10px]">
                <input
                    className="peer absolute cursor-pointer opacity-0"
                    type="checkbox"
                    aria-controls="char-limit"
                    aria-expanded="{enabled}"
                />
                <span className="h-4 w-4 rounded-xs border-1 border-neutral-900 bg-transparent bg-cover bg-center bg-no-repeat group-hover:border-purple-500 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:bg-[url('./assets/images/icon-check.svg')] group-hover:peer-checked:border-purple-500 group-hover:peer-checked:bg-purple-500 peer-focus-visible:border-neutral-200 peer-focus-visible:bg-white peer-focus-visible:shadow-[0_0_0_0.125rem_#FFFFFF,0_0_0_0.25rem_#D3A0FA] peer-checked:peer-focus-visible:border-purple-400 peer-focus-visible:peer-checked:bg-purple-400 dark:border-neutral-200"></span>
                <span className="text-base leading-tight tracking-tight">
                    Set Character Limit
                </span>
            </label>

            <div>
                <label className="sr-only" htmlFor="char-limit">
                    Character limit
                </label>
                <input
                    className="h-[29px] w-[55px] [appearance:textfield] rounded-sm border-1 px-3 py-1 text-base leading-[29px] tracking-tight [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    type="number"
                    id="char-limit"
                />
            </div>

            <div className="text-base leading-tight tracking-tight md:ml-auto">
                Approx. reading time:{" "}
                <output className="trackiing-tiight text-base leading-tight">
                    0 minutes
                </output>
            </div>
        </div>
    );
}

export default Checkboxes;
