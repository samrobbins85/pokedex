import { useRouter } from "next/router";
import useSWR from "swr";
import Error from "next/error";
import Description from "../components/description";
import Head from "next/head";
import Stat from "../components/stat";
import Link from "next/link";
import Home from "../components/svg/home";
import Type from "../components/type";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Pokemon() {
    const router = useRouter();
    const { slug } = router.query;
    const { data, error } = useSWR(
        slug ? `https://pokeapi.co/api/v2/pokemon/${slug}` : null,
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
                        <Home className="h-10 w-10 inline-block" />
                        <span className="text-2xl align-middle">Home</span>
                    </a>
                </Link>
            </div>
            <div className="pt-4">
                <div className="grid sm:border max-w-md mx-auto">
                    <h1 className="px-4 capitalize text-4xl font-semibold py-4">
                        {data.name}
                    </h1>

                    <div className="flex px-4 flex-wrap">
                        {data.types.map((x) => (
                            <Type key={x.type.name} type={x.type.name} />
                        ))}
                    </div>

                    <img
                        className="h-64 w-64 object-contain mx-auto"
                        src={
                            data.sprites.other["official-artwork"]
                                .front_default !== null
                                ? data.sprites.other["official-artwork"]
                                      .front_default
                                : data.sprites.front_default
                                ? data.sprites.front_default
                                : "https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
                        }
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
