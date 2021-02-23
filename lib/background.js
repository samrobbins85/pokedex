export default function background(type) {
    switch (type) {
        case "unknown":
            return "bg-teal-200";
        case "fairy":
            return "bg-pink-200";
        case "dark":
            return "bg-amber-700";
        case "dragon":
            return "bg-purple-500";
        case "ice":
            return "bg-cyan-100";
        case "psychic":
            return "bg-pink-100";
        case "electric":
            return "bg-yellow-100";
        case "grass":
            return "bg-green-300";
        case "water":
            return "bg-blue-300";
        case "fire":
            return "bg-orange-200";
        case "steel":
            return "bg-violet-100";
        case "ghost":
            return "bg-violet-700";
        case "bug":
            return "bg-lime-300";
        case "rock":
            return "bg-yellow-300";
        case "ground":
            return "bg-amber-200";
        case "poison":
            return "bg-fuchsia-700";
        case "flying":
            return "bg-purple-200";
        case "fighting":
            return "bg-red-200";
        case "normal":
            return "bg-warmGray-300";
        default:
            return "bg-blue-200";
    }
}
