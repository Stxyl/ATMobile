import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function creditcardfill(props) {
    return(
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={22.949}
            height={16.689}
            {...props}
        >
            <Path
                d="M3.994 13.662c-.576 0-.957-.39-.957-.937v-1.807c0-.557.381-.938.957-.938h2.393c.576 0 .957.381.957.938v1.807c0 .546-.381.937-.957.937ZM0 6.162V3.945h22.95v2.217ZM3.066 16.69h16.817c2.05 0 3.066-1.005 3.066-3.017V3.037c0-2.012-1.015-3.027-3.066-3.027H3.066C1.026.01 0 1.025 0 3.037v10.635c0 2.012 1.025 3.017 3.066 3.017Z"
                fill="#fff"
                fillOpacity={0.85}
            />
        </Svg>
    )
}
