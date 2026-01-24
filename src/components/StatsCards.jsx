import { useContext } from "react";
import { TextStatsContext } from "../context/TextStatsContext";
import StatCard from "./StatsCard";

function StatCards() {
    const { text, excludeSpaces } = useContext(TextStatsContext);

    const characterCount = excludeSpaces
        ? text.replace(/\s+/g, "").length
        : text.length;

    const wordCount =
        text.trim() === "" ? "00" : text.trim().split(/\s+/).length;

    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <StatCard
                value={characterCount === 0 ? "00" : characterCount}
                label="Total Characters"
                bgColor="bg-purple-400"
                bgIcon="bg-[url('./assets/images/pattern-character-count.svg')]"
                extraText={excludeSpaces}
            />

            <StatCard
                value={wordCount}
                label="Word Count"
                bgColor="bg-yellow-500"
                bgIcon="bg-[url('./assets/images/pattern-word-count.svg')]"
            />

            <StatCard
                value={"04"}
                label="Sentence Count"
                bgColor="bg-orange-500"
                bgIcon="bg-[url('./assets/images/pattern-sentence-count.svg')]"
            />
        </div>
    );
}

export default StatCards;
