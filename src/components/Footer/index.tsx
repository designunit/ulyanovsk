import s from './styles.module.css'
import { Button } from '../Button'
import Image from 'next/image'

export const Footer: React.SFC = props => {

    return (
        <footer className={s.footer}>
            <div className={s.items}>
                <div className={s.item}>
                    <a href='https://minstroyrf.gov.ru/'>
                        <Image
                            src='/static/minstroy.jpg'
                            width={120}
                            height={90}
                        />
                    </a>
                    <div className={s.text}>
                        Минстрой России
                    </div>
                </div>

                <div className={s.item}>
                    <a href='https://www.v-tura.ru/'>
                        <Image
                            src='/static/admintura.jpg'
                            width={65}
                            height={81}
                        />
                    </a>
                    <div className={s.text}>
                        Администрация города<br/>
                        Верхняя Тура
                    </div>
                </div>

                <div className={s.item}>
                    <a href="https://unit4.io" 
                        style={{
                            maxWidth: '200px'
                        }}
                    >
                        <Image
                            src='/static/unit.jpg'
                            width={1590}
                            height={307}
                        /> 
                    </a>
                    <div className={s.text}>
                        Проектная студия<br/>
                        дизайн&nbsp;юнит&nbsp;4
                    </div>
                </div>
            </div>

            <hr />
            <div className={`${s.text}`}>
                <Button
                    href={'https://unit4.io'}
                    theme={'link'}
                >
                    ©2020 design unit 4
                </Button>
            </div>
        </footer>
    )
}