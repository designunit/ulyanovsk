import React from 'react'
import { Section } from '../Section'
import { Step } from '../Step'
import { Steps } from '../Steps'
import { Title } from '../Title'

export const Roadmap: React.FC = () => {
    return (
        <Section>
            <Title level={2}>График проекта</Title>
            <Steps>
                <Step
                    title={'ноябрь/декабрь'}
                >
                    <ul>
                        <li>Выбор территории.</li>
                    </ul>
                </Step>
                <Step
                    title={'декабрь/февраль'}
                >
                    <ul>
                        <li>Фокус-группы с жителями</li>
                        <li>Интервью с лидерами мнений</li>
                        <li>Общегородской опрос</li>
                        <li>Карта идей и предложений</li>
                        <li>Проектный семинар с горожанами</li>
                        <li>Разработка предварительной концепции</li>
                    </ul>
                </Step>
                <Step
                    title={'март/апрель'}
                >
                    <ul>
                        <li>
                            Обсуждение предварительной концепции с&nbsp;жителями
                        </li>
                        <li>
                            Акции в&nbsp;поддержку проекта
                        </li>
                        <li>
                            Разработка культурной программы
                        </li>
                        <li>
                            Доработка концепции с&nbsp;учетом обратной связи от&nbsp;жителей
                        </li>
                    </ul>
                </Step>
                <Step
                    title={'Май'}
                >
                    <ul>
                        <li>
                            Презентация итогового проекта жителям
                        </li>
                        <li>
                            Подача заявки на&nbsp;конкурс
                        </li>
                    </ul>
                </Step>
                <Step
                    title={'июнь/август'}
                >
                    <ul>
                        <li>
                            Оценка заявок федеральным жюри Конкурса
                        </li>
                    </ul>
                </Step>
                <Step
                    title={'2022/2023'}
                >
                    <ul>
                        <li>
                            Реализация проекта в&nbsp;случае победы
                        </li>
                    </ul>
                </Step>
            </Steps>
        </Section>
    )
}

