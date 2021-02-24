import { useSearchFieldState } from "@react-stately/searchfield";
import { useSearchField } from "@react-aria/searchfield";
import { useRef } from "react";
export default function SearchField(props) {
    let { label } = props;
    let state = useSearchFieldState(props);
    let ref = useRef();
    let { labelProps, inputProps } = useSearchField(props, state, ref);

    return (
        <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
            <label {...labelProps}>{label}</label>
            <input {...inputProps} ref={ref} />
        </div>
    );
}
