import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function map(props) {
    return(
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20.313}
            height={19.15}
            {...props}
        >
            <Path
                d="M0 17.695c0 .713.41 1.123 1.113 1.123.254 0 .498-.078.82-.254l4.102-2.216V.166c-.176.088-.37.186-.547.283L.86 3.105C.273 3.428 0 3.896 0 4.551Zm7.373-1.533 4.922 2.764c.146.078.303.146.45.185V3.174L7.92.224A1.662 1.662 0 0 0 7.373 0Zm6.7 2.92a1.11 1.11 0 0 0 .292-.127l5.088-2.89c.586-.323.86-.792.86-1.446V1.465c0-.723-.41-1.123-1.114-1.123-.254 0-.498.078-.82.254l-4.307 2.392Z"
                fill="#fff"
                fillOpacity={0.85}
            />
        </Svg>
    )
}

