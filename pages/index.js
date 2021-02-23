import Head from "next/head";
import useSWR from "swr";
import { useState } from "react";
import Fuse from "fuse.js";
import HomeCard from "../components/home_card";
import Card_Loading from "../components/card_loading";
import SearchField from "../components/search";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function IndexPage({ all }) {
    const [pageIndex, setPageIndex] = useState(0);
    const [search, setSearch] = useState("");
    const { data } = useSWR(
        `https://pokeapi.co/api/v2/pokemon/?offset=${pageIndex}`,
        fetcher
    );

    function previous() {
        if (pageIndex >= 20) {
            setPageIndex(pageIndex - 20);
        }
    }
    function next() {
        if (pageIndex + 20 < all.count) {
            setPageIndex(pageIndex + 20);
        }
    }

    const options = {
        includeScore: true,
        keys: ["name"],
    };

    const fuse = new Fuse(all.results, options);

    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name="Description" content="A pokedex for pokemon" />
            </Head>
            <div>
                <h1 className="py-4 text-center text-5xl font-semibold">
                    Pokedex
                </h1>
                <div className="flex justify-center py-4">
                    <SearchField
                        label="Search"
                        placeholder="Search for a pokemon"
                        onChange={(event) => setSearch(event)}
                    />
                </div>
                <div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-24 px-8 py-4">
                    {data &&
                        !search &&
                        data.results.map((x) => (
                            <HomeCard key={x.name} item={x} />
                        ))}
                    {!data &&
                        [...Array(20)].map((_, i) => <Card_Loading key={i} />)}

                    {data &&
                        search &&
                        fuse
                            .search(search)
                            .filter((y) => y.score < 0.1)
                            .map((x) => (
                                <HomeCard key={x.item.name} item={x.item} />
                            ))}
                </div>
                {!search && (
                    <div className="flex justify-center">
                        <div className="py-4">
                            <button
                                disabled={pageIndex === 0}
                                className={`px-4 py-2 w-32 border  ${
                                    pageIndex === 0
                                        ? "opacity-60"
                                        : "hover:bg-gray-100"
                                }`}
                                onClick={previous}
                            >
                                Previous
                            </button>
                            <span className="mx-4">
                                Page {pageIndex / 20 + 1} of{" "}
                                {Math.ceil(all.count / 20)}
                            </span>
                            <button
                                disabled={pageIndex + 20 > all.count}
                                className={`px-4 py-2 w-32 border  ${
                                    pageIndex + 20 > all.count
                                        ? "opacity-50"
                                        : "hover:bg-gray-100"
                                }`}
                                onClick={next}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export async function getStaticProps() {
    const count = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const count_json = await count.json();
    const all_req = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${count_json.count}`
    );
    const all = await all_req.json();

    return {
        props: { all },
    };
}
