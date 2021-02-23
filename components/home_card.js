import Link from "next/link";
export default function HomeCard({ item }) {
    return (
        <Link href={"/" + item.name}>
            <a className="w-full">
                <div className="border h-36 grid justify-center ">
                    <div className="h-20 w-24 my-2 relative">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                item.url.split("/").reverse()[1]
                            }.png`}
                            alt={item.name}
                        />
                    </div>
                    <span className="text-center capitalize h-8 my-2">
                        {item.name}
                    </span>
                </div>
            </a>
        </Link>
    );
}
