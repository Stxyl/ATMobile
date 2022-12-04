import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function figurewalk(props) {
    return(
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13.2 22"
            style={{
                enableBackground: "new 0 0 13.2 22",
            }}
            xmlSpace="preserve"
            {...props}
        >
            <Path
                style={{
                    fillOpacity: 0,
                }}
                fill="none"
                d="M0 0h13.2v22H0z"
            />
            <Path
                d="m1.6 21.1 2.9-3.5c.3-.3.3-.4.4-.8l.2-.7-1.6-2-.5 2.2-2.9 3.4c-.7 1.2.8 2.3 1.5 1.4zm7.2-.3c.6 1.2 2.4.5 1.7-.9l-2-4c-.1-.3-.3-.6-.5-.9l-1.3-1.8.1-.3c.3-1 .5-1.6.5-2.6l.2-2.8c.1-1.3-.7-2.4-2.1-2.4-1 0-1.7.5-2.7 1.4L1.3 8.1c-.5.4-.6.8-.7 1.5l-.2 2.3c0 .6.3 1 .8 1s.9-.3.9-.9l.2-2.5.7-.6c.4-.3.7-.2.7.1l-.2 2.1c-.1 1.1.2 1.6.9 2.5l2 2.5c.2.3.2.4.3.5l2.1 4.2zm3.4-11.9H9.9L8.5 7.4l-.2 2.3.6.6c.3.3.6.4 1.2.4h2.1c.6 0 1-.3 1-.9 0-.5-.4-.9-1-.9zM6.6 4.3c1.2 0 2.1-1 2.1-2.1C8.7.9 7.7 0 6.6 0 5.4 0 4.4.9 4.4 2.1c0 1.2 1 2.2 2.2 2.2z"
                style={{
                    fill: "#fff",
                    fillOpacity: 0.85,
                }}
            />
        </Svg>
    )
}

