import Link from "next/link";
export default function HomeCard({ item }) {
    return (
        <Link href={"/" + item.name}>
            <a className="w-full">
                <div className="border h-36 grid justify-items-center ">
                    <img
                        className="h-20 w-24 my-2 object-contain"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                            item.url.split("/").reverse()[1]
                        }.png`}
                        alt={item.name}
                        onError={(e) =>
                            (e.target.src =
                                "https://pngimg.com/uploads/pokeball/pokeball_PNG8.png")
                        }
                    />
                    <span className="text-center capitalize h-8 my-2">
                        {item.name}
                    </span>
                </div>
            </a>
        </Link>
    );
}
