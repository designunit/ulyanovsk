import s from './styles.module.css'
import { Button } from "../Button"
import { useContext, useRef } from "react"
import { ConfigContext } from 'src/context/config'

interface MenuProps {
    onClick: (x: any, e: any) => void
}

export const Menu: React.FC<MenuProps> = ({ onClick }) => {
    const underline = useRef(null)
    const { mapUrl } = useContext(ConfigContext)
    const buttons = [
        {
            href: '/#news',
            text: 'новости'
        },
        {
            href: mapUrl,
            text: 'Карта идей'
        },
        {
            text: 'Пройти опрос',
            href: '/'
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
                    onClick={e => onClick(x, e)}
                    style={{
                        fontSize: '1.05em',
                        color: 'black',
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
                    backgroundColor: 'black',
                    transition: 'all .5s',
                }}
            />
        </>
    )
}