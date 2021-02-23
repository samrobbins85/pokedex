import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Description({ species }) {
    const { data, error } = useSWR(species, fetcher);
    if (error) return <div>Error</div>;
    if (!data)
        return (
            <div className="animate-pulse px-4 grid gap-y-4 pb-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
        );
    var entries = data.flavor_text_entries.filter(
        (x) => x.language.name === "en"
    );
    return (
        <span className="px-4 pb-4">
            {entries[Math.floor(Math.random() * entries.length)].flavor_text}
        </span>
    );
}
