import s from './styles.module.css'

import ReactModal from 'react-modal'
import { Button } from '../Button'
import React, { useRef, useState } from 'react'
import { OpinionForm } from '../OpinionForm'
import { Title } from '../Title'
import { Article } from '../Article'

export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
}> = ({ modalIsOpen, setModalIsOpen }) => {
    const delay = 250

    const [state, setState] = useState<'start' | 'form' | 'finish'>('start')

    const refContainer = useRef<HTMLDivElement>(null)

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            closeTimeoutMS={delay}
            className={s.modal}
            overlayClassName={s.overlay}
            ariaHideApp={false}
        >
            <>
                <div className={s.title}>
                    <Title level={3}>
                        Благоустройство Набережной Верхнетуринского пруда<br />Опрос горожан
                </Title>
                    <Button
                        onClick={() => setModalIsOpen(false)}
                        theme={'link'}
                        size='small'
                        className={s.close}
                        style={{
                            position: 'absolute',
                            top: '5.5rem',
                            right: 'calc(10% + 2rem)',
                            zIndex: 2,
                        }}
                    >
                        <img
                            src='/static/closeMenu.svg'
                            style={{
                                width: 32,
                                height: 32,
                            }}
                        />
                    </Button>
                </div>
                <span ref={refContainer} />
                {state == 'start' ? (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Article>
                            <p>Друзья, спасибо, что вы здесь!</p>

                            <p>Расскажите нам о ваших идеях и предложениях по преобразованию Набережной Верхнетуринского пруда для участия во Всероссийском конкурсе лучших проектов создания комфортной городской среды в малых городах.</p>

                            <p>От активности и вовлеченности жителей зависит получит ли город денежный грант на реализацию проекта. Поделитесь, пожалуйста, ссылкой на опрос и интерактивную карту с друзьями, соседями, коллегами и знакомыми. Чем больше мы соберем ответов — тем более полную информацию получим о мнении жителей, как должна развиваться территория Набережной.</p>

                            <p>Обратите внимание, многие вопросы в данной анкете не являются обязательными. Если у вас не так много времени для заполнения, можно ограничиться только обязательными вопросами, но будем рады если вы ответите на все предложенные вопросы. На заполнение у вас уйдет не более 25 минут.</p>

                            <p>В анкете есть блок вопросов о городе, он необходим для того, чтобы концепция набережной отражала образ города Верхняя Тура и изменения в возможностях для досуга и отдыха горожан, а не только решение первоочередных проблем городской среды.</p>
                        </Article>
                        <Button
                            onClick={() => setState('form')}
                            theme={'default'}
                            size='big'
                            style={{
                                marginTop: '2rem',
                                marginBottom: '2rem',
                                width: 'fit-content',
                            }}
                        >
                            НАЧАТЬ ОПРОС
                </Button>
                    </div>
                ) : (
                        state == 'finish' ? (
                            <div style={{
                                height: '75%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <div style={{
                                    paddingBottom: '3rem',
                                }}>
                                    <Title level={3} style={{ fontSize: '56px', lineHeight: '56px' }}>
                                        Спасибо, Ваш ответ отправлен.
                                    </Title>
                                </div>
                                <Button
                                    onClick={() => setModalIsOpen(false)}
                                    theme={'default'}
                                    size='big'
                                    style={{
                                        width: 'fit-content',
                                    }}
                                >
                                    ЗАВЕРШИТЬ
                            </Button>
                            </div>
                        ) : (
                                <OpinionForm
                                    showFinish={() => setState('finish')}
                                    scrollTop={() => {
                                        if (!refContainer.current) return
                                        console.log('TO OTOP')
                                        refContainer.current.scrollIntoView()
                                    }}
                                />
                            )
                    )}
            </>
        </ReactModal>
    )
}