import * as d3Shape from 'd3-shape'
import { useCallback, useEffect, useState } from 'react'
import { useRafLoop } from 'react-use'

export type BubbleProps = {
    style?: React.CSSProperties
    durationMs?: number
    color?: string
    opacity?: number
    picturePath?: string
}

const generateKeyFrame = () => {
    const pointCount = 12
    const angle = Math.PI * 2
    const line = d3Shape.lineRadial().curve(d3Shape.curveCardinalClosed)
        .radius((d, i) => .5 * .75 + Math.random() * .5 * .25)
        .angle((d, i) => angle / pointCount * i + Math.random() * angle / pointCount * .5)
    const str = line({ length: pointCount } as any) as string

    return str
}

export const Bubble: React.FC<BubbleProps> = ({
    durationMs = 2 * 1000,
    picturePath,
    color = 'white',
    opacity = 1,
    ...props
}) => {

    const [keyFrame, setKeyFrame] = useState('M0.0')
    const [prevKeyFrame, setPrevKeyFrame] = useState('M0.0')
    const [prevSinSign, setPrevSinSign] = useState(.5)

    useEffect(() => {
        setKeyFrame(generateKeyFrame())
        setPrevKeyFrame(generateKeyFrame())
    }, [])

    const rafLoopCallback = useCallback(time => {
        // const sin = Math.sin(time / durationMs)
        if(time >= prevSinSign + durationMs) {
            setPrevKeyFrame(keyFrame)
            setKeyFrame(generateKeyFrame())
        }
        setPrevSinSign(time)
        // if (Math.sign(sin) != prevSinSign) {
        //     setPrevKeyFrame(keyFrame)
        //     setKeyFrame(generateKeyFrame())
        // }
        // setPrevSinSign(Math.sign(sin))
    }, [keyFrame, prevSinSign])

    useRafLoop(rafLoopCallback, true)

    const clipPathId = `clipPath${picturePath}`

    return (
        <>
            <style jsx>{`
                #test {
                    d: path('M0.0');
                    animation-name: path;
                    animation-duration: ${durationMs/1000}s;
                    animation-timing-function: ease-in-out;
                    animation-fill-mode: forwards;
                }

                @keyframes path {
                    0% {
                        d: path('${prevKeyFrame}');
                    }
                    100% {
                        d: path('${keyFrame}');
                    }
                }
            `}</style>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ ...props.style, height: picturePath ? 0 : props.style?.height }}
                preserveAspectRatio="none"
                viewBox='0 0 1 1'
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill={color}
                    opacity={opacity}
                    transform='translate(.5, .5)'
                    id="test"
                />
                {/* {!picturePath ? path : (
                    <defs>
                        <clipPath
                            id={clipPathId}
                            clipPathUnits='objectBoundingBox'
                        >
                            {path}
                        </clipPath>
                    </defs>
                )} */}
            </svg>

            {!picturePath ? null : (
                <img src={picturePath} style={{ ...props.style, WebkitClipPath: `url(#${clipPathId})`, clipPath: `url(#${clipPathId})` }} />
            )}
        </>
    )
}