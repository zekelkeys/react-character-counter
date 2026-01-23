function StatCard({ value, label, bgColor, bgIcon, extraText }) {
    return (
        <div
            className={`flex w-full flex-col gap-2 rounded-xl bg-no-repeat px-5 py-7 ${bgColor} ${bgIcon} bg-[right_-3.125rem_center] md:bg-[right_-4.375rem_center] md:px-3 md:py-6 lg:bg-[right_-1.875rem_center] lg:px-4`}
        >
            <output className="text-2xl leading-none font-bold tracking-tighter text-neutral-900 md:text-3xl">
                {value}
            </output>
            <span className="text-lg leading-snug tracking-tight text-neutral-900">
                {label}
                {extraText && (
                    <span
                        className="text-base leading-tight tracking-tight"
                        id="space-count"
                    >
                        {" (no space)"}
                    </span>
                )}
            </span>
        </div>
    );
}

export default StatCard;
