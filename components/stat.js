export default function Stat({ data, description, name }) {
    return (
        <span className="grid justify-items-center">
            <span className="text-2xl font-semibold">
                {data.filter((x) => x.stat.name === name)[0].base_stat}
            </span>
            <span className="text-gray-600 text-xs text-center uppercase font-medium">
                {description}
            </span>
        </span>
    );
}
