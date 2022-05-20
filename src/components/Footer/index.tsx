import s from './styles.module.css'
import { Button } from '../Button'
import Image from 'next/image'
import oblast from '/public/static/Герб_Ульяновской_области_(2013).svg'
import urbanika from '/public/static/urbanika.svg'
import centr from '/public/static/centr.svg'
import unit from '/public/static/unit.svg'
import tranceparent from '/public/static/tranceparent.svg'

export const Footer: React.SFC = props => {

    return (
        <footer className={s.footer}>
            <div className={s.items}>
                <div className={s.item}>
                    <Image
                        src={oblast}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        Губернатор и Правительство<br />
                        Ульяновской области
                    </div>
                </div>
                <div className={s.item}>
                    <Image
                        src={tranceparent}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        Центр стратегических исследований<br />
                        Ульяновской области
                    </div>
                </div>
                <div className={s.item}>
                    <Image
                        src={urbanika}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        Институт территориального планирования
                    </div>
                </div>
                <div className={s.item}>
                    <Image
                        src={centr}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        «Центр стратегических разработок<br />
                         «Северо-Запад»
                    </div>
                </div>
                <div className={s.item}>
                    <Image
                        src={unit}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        Проектная студия<br />
                        дизайн юнит 4
                    </div>
                </div>
            </div>

            {/* <hr />
            <div className={`${s.text}`}>
                <Button
                    href={'https://unit4.io'}
                    theme={'link'}
                >
                    ©2022 design : : unit 4
                </Button>
            </div> */}
        </footer>
    )
}