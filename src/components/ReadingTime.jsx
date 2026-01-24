function ReadingTime() {
    return (
        <div className="flex items-center text-base leading-tight tracking-tight md:ml-auto">
            Approx. reading time
            <output className="trackiing-tiight text-base leading-tight">
                {": 0 minutes"}
            </output>
        </div>
    );
}

export default ReadingTime;
