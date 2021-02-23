import { useSearchFieldState } from "@react-stately/searchfield";
import { useSearchField } from "@react-aria/searchfield";
import { useRef } from "react";
import { useButton } from "@react-aria/button";
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
