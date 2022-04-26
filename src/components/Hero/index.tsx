import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'
import { SectionParalaxedBack } from '../SectionParalaxedBack'
import Image from 'next/image'

export const Hero: React.FC<any> = ({ openModal }) => {
    const { mapUrl } = useContext(ConfigContext)

    return (
        <SectionParalaxedBack
            back={(
                <Image
                    src='/static/hero.jpg'
                    layout='fill'
                    objectFit='cover'
                    priority
                    loading='eager'
                />
            )}
            contentStyle={{
                width: '100%',
                paddingTop: '5rem'
            }}
        >
            <Title>
                <div className={`${s.whiteBg} ${s.titleLine}`}>
                    Набережная Верхнетуринского пруда<br/>
                </div>
                <div className={`${s.whiteBg} ${s.titleLine} ${s.titleTura}`}>
                    от&nbsp;площади до&nbsp;ул. Молодцова
                </div>
            </Title>

            <span className={s.heroSubtitle}>
                <p className={`${s.description} ${s.whiteBg}`}>
                    Обсуждаем вместе с&nbsp;горожанами, экспертами, предпринимателями, представителями культурных и&nbsp;образовательных учреждений как преобразовать набережную верхнетуринского пруда от&nbsp;площади до&nbsp;ул. Молодцова.
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