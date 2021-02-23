import { useRouter } from "next/router";
import useSWR from "swr";
import Error from "next/error";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Pokemon() {
    const router = useRouter();
    const { slug } = router.query;
    const { data, error } = useSWR(
        `https://pokeapi.co/api/v2/pokemon/${slug}`,
        fetcher
    );
    if (error) return <Error statusCode={404} />;
    if (!data) return <div>loading...</div>;
    return <div>{data.name}!</div>;
}
