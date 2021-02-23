import Head from "next/head";
import useSWR from "swr";
import { useState } from "react";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function IndexPage() {
    const [pageIndex, setPageIndex] = useState(0);
    const { data } = useSWR(
        `https://pokeapi.co/api/v2/pokemon/?offset=${pageIndex}`,
        fetcher
    );
    // console.log(data);

    function previous() {
        if (pageIndex >= 20) {
            setPageIndex(pageIndex - 20);
        }
    }
    function next() {
        if (pageIndex + 20 < data.count) {
            setPageIndex(pageIndex + 20);
        }
    }

    return (
        <>
            <Head>
                <title>Next.js Template</title>
                <meta
                    name="Description"
                    content="A template Next.js application"
                />
            </Head>
            <div>
                <h1 className="py-4 text-center text-5xl font-semibold">
                    Pokedex!!{" "}
                </h1>
                <div className="grid justify-items-center grid-cols-4 gap-y-4">
                    {data
                        ? data.results.map((x) => (
                              <Link key={x.name} href={"/" + x.name}>
                                  <a className="w-1/2">
                                      <div className="border h-32 ">
                                          <span>{x.name}</span>
                                      </div>
                                  </a>
                              </Link>
                          ))
                        : [...Array(20)].map((e, i) => (
                              <div className="border w-1/2 h-32" key={i}></div>
                          ))}
                </div>
                <div className="flex justify-around py-4">
                    <button
                        className="px-4 py-2 border hover:bg-gray-100"
                        onClick={previous}
                    >
                        Previous
                    </button>
                    <span>
                        Page {pageIndex / 20 + 1} of{" "}
                        {data && Math.ceil(data.count / 20)}
                    </span>
                    <button
                        className="px-4 py-2 border hover:bg-gray-100"
                        onClick={next}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
