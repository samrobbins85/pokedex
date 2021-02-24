import { useSearchFieldState } from "@react-stately/searchfield";
import { useSearchField } from "@react-aria/searchfield";
import { useRef } from "react";
export default function SearchField(props) {
    let state = useSearchFieldState(props);
    let ref = useRef();
    let { inputProps } = useSearchField(props, state, ref);

    return <input {...inputProps} ref={ref} />;
}
