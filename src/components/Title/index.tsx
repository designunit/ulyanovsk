import s from './styles.module.css'
import { createElement } from 'react'
import cx from 'classnames'

const levelClass = new Map([
    [1, s.h1],
    [2, s.h2],
    [3, s.h3],
    [4, s.h4],
    [5, s.h5],
    [6, s.h6],
])

export type TitleProps = {
    level?: 1 | 2 | 3 | 4 | 5 | 6
    style?: React.CSSProperties
}

export const Title: React.FC<TitleProps> = ({ level = 1, style,  ...props }) => {
    const Tag = `h${level}`

    return createElement(Tag, { className: cx(s.title, levelClass.get(level)), style }, props.children)
}
