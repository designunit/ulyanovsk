import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'
import { SectionParalaxedBack } from '../SectionParalaxedBack'
import Image from 'next/image'
import { PrismicRichText } from '@prismicio/react'
import gerb from '/public/static/maingerb.svg'

export const Hero: React.FC<any> = ({ data, openModal }) => {
    const { mapUrl } = useContext(ConfigContext)
    return (
        <SectionParalaxedBack
            back={(
                <Image
                    src={data.image?.url ?? '/static/unit.jpg'}
                    {...data.image?.dimensions ?? { width: 1590, height: 307 }}
                    alt={data.image?.alt ?? ''}
                    layout='fill'
                    objectFit='cover'
                    priority
                    loading='eager'
                />
            )}
            contentStyle={{
                width: '100%',
                paddingTop: '5rem',
            }}
        >
            <div className={s.top}>
                <div className={`${s.titleLine}`}>
                    <Title>
                        Комплексное аналитическое исследование<br />
                        <span style={{
                            fontSize: '.6em',
                            lineHeight: '.5em'
                        }}>
                            Ульяновска и Ульяновско-Димитровградской агломерации
                        </span>
                    </Title>
                </div>
                {/* <div>
                    <Image
                        src={gerb}
                    />
                </div> */}
            </div>

            <span className={s.heroSubtitle}>
                <p className={`${s.description} ${s.blackBg}`}>
                    <PrismicRichText field={data.description} />
                </p>
            </span>

            <div className={s.heroButtons}>
                <Button
                    href={mapUrl}
                    size='big'
                >
                    Карта идей
                </Button>
                <div className={s.buttonsSpacer} />
                <Button
                    size='big'
                    theme={'primary'}
                    onClick={openModal}
                >
                    ПРОЙТИ ОПРОС
                </Button>
            </div>
        </SectionParalaxedBack>
    )
}