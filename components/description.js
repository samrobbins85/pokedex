import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Description({ species }) {
    const { data, error } = useSWR(species, fetcher);
    if (error) return <div>Error</div>;
    if (!data) return <div>loading...</div>;
    var entries = data.flavor_text_entries.filter(
        (x) => x.language.name === "en"
    );
    return (
        <span className="px-4 pb-4">
            {entries[Math.floor(Math.random() * entries.length)].flavor_text}
        </span>
    );
}
