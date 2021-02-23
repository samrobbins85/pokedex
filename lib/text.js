export default function text(type) {
    switch (type) {
        case "unknown":
            return "text-teal-900";
        case "fairy":
            return "text-pink-900";
        case "dark":
            return "text-amber-100";
        case "dragon":
            return "text-purple-50";
        case "ice":
            return "text-cyan-900";
        case "psychic":
            return "text-pink-700";
        case "electric":
            return "text-yellow-700";
        case "grass":
            return "text-green-900";
        case "water":
            return "text-blue-900";
        case "fire":
            return "text-orange-900";
        case "steel":
            return "text-violet-700";
        case "ghost":
            return "text-violet-100";
        case "bug":
            return "text-lime-900";
        case "rock":
            return "text-yellow-900";
        case "ground":
            return "text-amber-900";
        case "poison":
            return "text-fuchsia-100";
        case "flying":
            return "text-purple-900";
        case "fighting":
            return "text-red-900";
        case "normal":
            return "text-warmGray-900";
        default:
            return "text-blue-900";
    }
}
