import { Header } from 'src/components/Header'
import { useState, useCallback } from 'react'
import { Menu } from '../Menu'
import { NextSeo } from 'next-seo'

export const PageLayout: React.FC<any> = props => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const onClick = useCallback((i: number) => {
        setIsOpen(false)
        if (i == 2) {
            props.openModal()
        }
    }, [])

    return (
        <main>
            <NextSeo
                title='Исследование Ульяновска и Ульяновско-Димитровградской агломерации'
                description='Приветствуем вас на сайте, посвящённом разработке комплексного аналитического исследования Ульяновска и Ульяновско-Димитровградской агломерации.'
                openGraph={{
                    images: [
                        {
                            url: '/static/hero.jpg',
                            width: 1200,
                            height: 717,
                        }
                    ]
                }}
            />
            <Header
                isOpen={isOpen}
                onClickMenu={onClickMenu}
                menu={(
                    <Menu
                        onClick={onClick}
                    />
                )}
            />
            {props.children}
        </main>
    )
}
