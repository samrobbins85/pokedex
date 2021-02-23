import Link from "next/link";
export default function HomeCard({ item }) {
    return (
        <Link key={item.name} href={"/" + item.name}>
            <a className="w-1/2">
                <div className="border h-32 grid justify-center ">
                    <div className="h-24 w-24 relative">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                item.url.split("/").reverse()[1]
                            }.png`}
                            alt={item.name}
                        />
                    </div>
                    <span className="text-center capitalize">{item.name}</span>
                </div>
            </a>
        </Link>
    );
}
