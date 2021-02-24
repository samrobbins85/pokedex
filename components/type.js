import background from "../lib/background";
import text from "../lib/text";
export default function Type({ type }) {
    return (
        <div className={`rounded-xl px-2 mx-1 my-1 py-1 ${background(type)}`}>
            <span className={`capitalize font-medium ${text(type)}`}>
                {type}
            </span>
        </div>
    );
}
