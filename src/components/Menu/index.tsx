import s from './styles.module.css'
import { Button } from "../Button"
import { useRef } from "react"

interface MenuProps {
    onClick: (i:number) => void
}

export const Menu: React.FC<MenuProps> = ({ onClick }) => {

    const underline = useRef(null)

    const buttons = [
        {
            href: '/#about',
            text: 'О проекте'
        },
        {
            href: '/#map',
            text: 'Карта идей'
        },
        {
            text: 'Пройти опрос',
            href: '/'
        },
        {
            href: '/#faq',
            text: 'Вопрос/Ответ'
        },
    ]

    return (
        <>
            {buttons.map((x, i) => (
                <Button
                    key={i}
                    href={x.href}
                    theme={'link'}
                    underlineRef={underline}
                    onClick={() => onClick(i)}
                    style={{
                        fontSize: '22px',
                        fontFamily: 'Bebas Neue',
                    }}
                >
                    {x.text}
                </Button>
            ))}
            <div
                ref={underline}
                className={s.underline}
                style={{
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    backgroundColor: '#111b47',
                    transition: 'all .5s',
                }}
            />
        </>
    )
}