import s from './styles.module.css'

import ReactModal from 'react-modal'
import { Button } from '../Button'
import React, { useState } from 'react'
import { Title } from '../Title'
import { Article } from '../Article'
import { PrismicRichText } from '@prismicio/react'

const data = [
    {
        name: 'Ульяновск',
        src: 'https://docs.google.com/forms/d/e/1FAIpQLSf50MNOn54JfBkgCm_0CS2MCn1AxLEdoM9mOs88V-isPMUiBQ/viewform?embedded=true',
    },
    {
        name: 'Димитровград',
        src: 'https://docs.google.com/forms/d/e/1FAIpQLScIBHMxEapxIP6DQZyeIsSBEWYQE6kCma3Br98f7oiM59mM7w/viewform?embedded=true',
    },
    {
        name: 'Новоульяновск',
        src: 'https://docs.google.com/forms/d/e/1FAIpQLSf50MNOn54JfBkgCm_0CS2MCn1AxLEdoM9mOs88V-isPMUiBQ/viewform?embedded=true',
    },
    {
        name: 'В другом районе агломерации',
        src: 'https://docs.google.com/forms/d/e/1FAIpQLScIBHMxEapxIP6DQZyeIsSBEWYQE6kCma3Br98f7oiM59mM7w/viewform?embedded=true',
    },
]

export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
    data: any
}> = ({ modalIsOpen, setModalIsOpen, data }) => {
    const delay = 250

    const [state, setState] = useState<null | 1 | 2 | 3 | 4>(null)

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
                        {data.title[0].text}
                    </Title>
                    <Button
                        onClick={() => setModalIsOpen(false)}
                        theme={'link'}
                        size='small'
                        className={s.close}
                        style={{
                            position: 'absolute',
                            top: '5.5rem',
                            right: 'calc(10%)',
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
                {state == null ? (
                    <div className={s.preview}>
                        <Article>
                            <PrismicRichText field={data.content} />
                        </Article>
                        <Article>
                            <p>
                                Чтобы начать опрос выберите где вы проживаете
                            </p>
                        </Article>
                        <div className={s.buttons}>
                            {data.forms.map((x, i) => (
                                <Button
                                    key={i}
                                    onClick={() => setState(i as any)}
                                    theme={'default'}
                                    size='big'
                                >
                                    {x.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <iframe className={s.iframe} src={data.forms[state].src} frameBorder='0' marginHeight={0} marginWidth={0}>Загрузка…</iframe>
                )}
            </>
        </ReactModal>
    )
}