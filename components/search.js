import { useSearchFieldState } from "@react-stately/searchfield";
import { useSearchField } from "@react-aria/searchfield";
import { useRef } from "react";
import { useButton } from "@react-aria/button";
import Clear from "./svg/clear";
export default function SearchField(props) {
    let state = useSearchFieldState(props);
    let ref = useRef();
    let { inputProps, clearButtonProps } = useSearchField(props, state, ref);
    let { buttonProps } = useButton(clearButtonProps);

    return (
        <div className="relative">
            <input {...inputProps} ref={ref} />{" "}
            {state.value !== "" && (
                <button className="absolute right-2 top-2" {...buttonProps}>
                    <Clear className="h-6 w-6 text-gray-700" />
                </button>
            )}
        </div>
    );
}
