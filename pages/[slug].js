import { useRouter } from "next/router";
import useSWR from "swr";
import Error from "next/error";
import Description from "../components/description";
import type from "../components/type";
import Head from "next/head";
import Stat from "../components/stat";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Pokemon() {
    const router = useRouter();
    const { slug } = router.query;
    const { data, error } = useSWR(
        `https://pokeapi.co/api/v2/pokemon/${slug}`,
        fetcher
    );
    if (error) return <Error statusCode={404} />;
    if (!data) return <div></div>;
    return (
        <>
            <Head>
                <title>
                    {data
                        ? data.name.charAt(0).toUpperCase() + data.name.slice(1)
                        : "Pokedex"}
                </title>
                <meta name="Description" content="A pokedex for pokemon" />
            </Head>
            <div className="pt-4 pl-4">
                <Link href="/">
                    <a className="text-gray-600 hover:text-black focus:text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-10 w-10 inline-block"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        <span className="text-2xl align-middle">Home</span>
                    </a>
                </Link>
            </div>
            <div className="pt-4">
                <div className="grid justify-center sm:border sm:w-3/4 md:w-1/2 lg:w-1/4 mx-auto">
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
                                <span className="capitalize">
                                    {x.type.name}
                                </span>
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
                        <Stat
                            data={data.stats}
                            name="hp"
                            description="Base HP"
                        />
                        <Stat
                            data={data.stats}
                            name="attack"
                            description="Base Attack"
                        />
                    </div>
                    <hr className="my-4" />
                    <Description species={data.species.url} />
                </div>
            </div>
        </>
    );
}
