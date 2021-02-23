import { useRouter } from "next/router";
import useSWR from "swr";
import Error from "next/error";
import Description from "../components/description";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import type from "../components/type";
export default function Pokemon() {
    const router = useRouter();
    const { slug } = router.query;
    const { data, error } = useSWR(
        `https://pokeapi.co/api/v2/pokemon/${slug}`,
        fetcher
    );
    console.log(data);
    if (error) return <Error statusCode={404} />;
    if (!data) return <div>loading...</div>;
    return (
        <div className="pt-4">
            <div className="grid justify-center border w-1/4 mx-auto">
                <h1 className="text-center capitalize text-4xl font-semibold">
                    {data.name}
                </h1>

                <div className="flex gap-x-2 px-2">
                    {data.types.map((x) => (
                        <div
                            className={`rounded-xl px-2 py-1 ${type(
                                x.type.name
                            )}`}
                            key={x.type.name}
                        >
                            <span className="capitalize">{x.type.name}</span>
                        </div>
                    ))}
                </div>
                <img
                    className="h-64 w-64 object-contain mx-auto"
                    src={data.sprites.front_default}
                    alt={data.name}
                />
                <div className="grid grid-cols-3 divide-x divide-gray-200 px-4 py-2">
                    <div className="grid justify-items-center">
                        <span className="text-2xl font-semibold">
                            {data.base_experience}
                        </span>
                        <span className="text-gray-600 text-xs uppercase font-medium text-center">
                            Base XP
                        </span>
                    </div>
                    <span className="grid justify-items-center">
                        <span className="text-2xl font-semibold">
                            {
                                data.stats.filter(
                                    (x) => x.stat.name === "hp"
                                )[0].base_stat
                            }
                        </span>
                        <span className="text-gray-600 text-xs text-center uppercase font-medium">
                            Base HP
                        </span>
                    </span>
                    <span className="grid justify-items-center">
                        <span className="text-2xl font-semibold">
                            {
                                data.stats.filter(
                                    (x) => x.stat.name === "attack"
                                )[0].base_stat
                            }
                        </span>
                        <span className="text-gray-600 text-xs text-center uppercase font-medium">
                            Base Attack
                        </span>
                    </span>
                </div>
                <hr className="my-4" />
                <Description species={data.species.url} />
            </div>
        </div>
    );
}
