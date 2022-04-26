import React from 'react'
import { Article } from '../Article'
import { Chatbar } from '../Chatbar'
import { Section } from '../Section'
import { Title } from '../Title'
import s from './index.module.css'

export const Votes: React.FC = () => {
    return (
        <Section>
            <div className={s.container}>
                <div className={s.text}>
                    <Title level={2} style={{textAlign: 'left'}}>
                        О&nbsp;голосовании
                    </Title>
                    <Article>
                        <p>
                            1927 жителей Верхней Туры проголосовали и&nbsp;выбрали Набережную!
                            С&nbsp;23&nbsp;ноября по&nbsp;14&nbsp;декабря жители выбирали территорию создания комфортной городской среды. Голосование проходило онлайн и&nbsp;оффлайн. С&nbsp;57,65% процентами победила набережная верхнетуринского пруда от&nbsp;городской площади до&nbsp;улицы Молодцова.
                            За&nbsp;две недели мы&nbsp;получили почти 2&nbsp;тысячи голосов. Это отличный результат для города и&nbsp;весомый показатель вовлечения жителей для жюри конкурса. Спасибо всем кто принял участие!
                        </p>
                    </Article>
                </div>
                <div className={s.chatbar}>
                    <Chatbar />
                </div>
            </div>
        </Section>
    )
}