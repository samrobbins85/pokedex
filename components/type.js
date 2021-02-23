export default function type(type) {
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
            return "bg-pink-400";
        case "electric":
            return "bg-yellow-300";
        case "grass":
            return "bg-green-300";
        case "water":
            return "bg-blue-300";
        case "fire":
            return "bg-orange-300";
        case "steel":
            return "bg-violet-100";
        case "ghost":
            return "bg-violet-400";
        case "bug":
            return "bg-lime-400";
        case "rock":
            return "bg-yellow-400";
        case "ground":
            return "bg-amber-200";
        case "poison":
            return "bg-purple-500";
        case "flying":
            return "bg-purple-200";
        case "fighting":
            return "bg-red-300";
        case "normal":
            return "bg-warmGray-300";
        default:
            return "bg-blue-200";
    }
}
