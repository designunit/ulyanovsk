import { Header } from 'src/components/Header'
import { useState, useCallback } from 'react'
import { Menu } from '../Menu'
import { NextSeo } from 'next-seo'

export const PageLayout: React.FC<any> = props => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const onClick = useCallback((x, e) => {
        setIsOpen(false)
        if (x.href == '/') {
            e.preventDefault()
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
                            width: 1920,
                            height: 1080,
                            type: 'image/jpeg',
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
