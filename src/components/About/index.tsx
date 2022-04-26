import s from './styles.module.css'
import Image from 'next/image'
import React from 'react'
import { Article } from '../Article'
import { Button } from '../Button'
import { Section } from '../Section'
import { Title } from '../Title'

export const About: React.FC = () => (
    <Section>
        <Title level={2}>
            О&nbsp;проекте
        </Title>
        <div className={s.container} >
            <div className={s.picture}>
                <Image
                    src='/static/about.jpg'
                    width={1023}
                    height={627}
                />
            </div>
            <div className={s.text}>
                <Article>
                    <p>
                        Город участвует во&nbsp;Всероссийском конкурсе лучших проектов создания комфортной городской среды в&nbsp;малых городах Министерства строительства РФ. Участие и&nbsp;победа в&nbsp;конкурсе позволит создать новые места для отдыха и&nbsp;досуга верхнетуринцев. Победители конкурса получают на&nbsp;реализацию проекта 50&nbsp;&mdash; 100&nbsp;миллионов.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        {/* <Button
                            href={'/concept'}
                            size='big'
                            theme={'primary'}
                            style={{
                                width: '100%',
                            }}
                        >
                            Посмотреть концепцию
                        </Button> */}
                    </div>
                    <p>
                        Жители города&nbsp;&mdash; главные участники преобразования набережной. С&nbsp;декабря по&nbsp;май пройдут мероприятия с&nbsp;горожанами, где определим ценности территории, которые необходимо сохранить, проблемы, которые необходимо решить, сформируем задачи развития территории и&nbsp;варианты досуга и&nbsp;отдыха жителей на&nbsp;набережной.
                        На&nbsp;основе общественного технического задания архитекторы разработают предложения по&nbsp;развитию территории, которые мы&nbsp;вместе обсудим и&nbsp;дополним.
                    </p>
                </Article>
            </div>
        </div>
    </Section>

)
