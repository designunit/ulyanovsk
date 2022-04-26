import { useState } from 'react'
import { useTimeoutFn } from 'react-use'
import s from './index.module.css'


export const Chatbar: React.FC = () => {
    const data = [
        {
            text: 'Набережная',
            width: 57.65, // '57.65%',
            count: 1111,
            color: '#d4c063',
        },
        {
            text: 'ул. Машиностроителей',
            width: 17.22, // '12.22%',
            count: 332,
            color: '#b2423e',
        },
        {
            text: 'Центральная площадь',
            width: 16.29, // '16.29%',
            count: 314,
            color: '#00804f',
        },
        {
            text: 'ул. Советская',
            width: 6.17, // '6.17%',
            count: 119,
            color: '#d1e5de',
        },
        {
            text: 'Испорчено',
            width: 2.65, // '2.65%',
            count: 51,
            color: '#0085ac',
        },
    ]

    const [items, setItems] = useState(data.map(x => ({...x, width: 1})))
    const [isRedrawed, cancel, reset] = useTimeoutFn(() => setItems(data), 100)

    return (
        <div className={s.container}>
            {items.map((x, i) => (
                <div
                    key={i}
                    className={s.item}
                >
                    <div className={s.bar}
                        style={{
                            height: '100%',
                            width: `${x.width / Math.max(...data.map(x => x.width)) * 100}%`,
                            backgroundColor: x.color,
                        }}
                    />
                    <div className={s.text}>
                        <p className={s.percent}>
                            {`${data[i].width}`}<span className={s.percentSign}>%</span>
                        </p>
                        <p className={s.name}>
                            {x.text}
                        </p>
                        <div className={s.count}>
                            <p style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <span className={s.countNum}>
                                    {x.count}
                                </span>
                                <span>
                                    голосов
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}