import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function lockopen(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12.5 20.7"
            style={{
                enableBackground: "new 0 0 12.5 20.7",
            }}
            xmlSpace="preserve"
            {...props}
        >
            <Path
                style={{
                    fillOpacity: 0,
                }}
                fill="none"
                d="M0 0h12.5v20.7H0z"
            />
            <Path
                d="M0 18.1c0 1.5 1.1 2.5 2.7 2.5h7.2c1.6 0 2.7-1 2.7-2.5V2.5C12.5 1 11.5 0 9.9 0H2.7C1.1 0 0 1 0 2.5v15.6zm1.6-.2V2.8c0-.8.4-1.2 1.3-1.2h6.8c.8 0 1.3.4 1.3 1.2v15.1c0 .8-.5 1.2-1.3 1.2H2.9c-.9 0-1.3-.4-1.3-1.2z"
                style={{
                    fill: "#007aff",
                }}
            />
            <Path
                d="M2.8 12.8c0 .6.3.8.8.8h3.3c.5 0 .8-.3.8-.8v-2.5c0-.6-.3-.8-.8-.8H3.6c-.5 0-.8.3-.8.8v2.5zM6.1 10h1V8.6c0-.7.4-1.2 1.1-1.2s1 .5 1 1.2v.7c0 .3.2.5.5.5s.5-.2.5-.5v-.7c0-1.2-.8-2.1-2-2.1s-2 .9-2 2.2V10z"
                style={{
                    fill: "#ff453a",
                }}
            />
        </Svg>
    )
}

