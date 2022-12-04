import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function personfill(props) {
    return(
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16.436}
            height={17.881}
            {...props}
        >
            <Path
                d="M1.67 17.88h13.096c1.044 0 1.67-.487 1.67-1.298 0-2.52-3.155-5.996-8.223-5.996C3.154 10.586 0 14.062 0 16.582c0 .81.625 1.299 1.67 1.299Zm6.553-9.042c2.09 0 3.906-1.875 3.906-4.317 0-2.412-1.816-4.199-3.906-4.199S4.316 2.148 4.316 4.541c0 2.422 1.807 4.297 3.907 4.297Z"
                fill="#fff"
                fillOpacity={0.85}
            />
        </Svg>
    );
}
