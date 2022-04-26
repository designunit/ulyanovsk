import s from './styles.module.css'
import cx from 'classnames'
import { slide as MobileMenu } from 'react-burger-menu'
import { Logo } from '../Logo'
import { ControlsContext } from 'src/context/controls'
import Image from 'next/image'

export type HeaderProps = {
    menu: React.ReactNode
    transparent?: boolean
    isOpen: boolean
    onClickMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({ transparent = false, isOpen, onClickMenu, ...props }) => {

    return (
        <ControlsContext.Provider value={{
            size: 'small',
            shape: 'default',
        }}>
            <header className={cx(s.header, {
                [s.transparent]: transparent,
            })}>
                <Logo />

                <nav className={s.menu}>
                    {props.menu}
                </nav>

                <button
                    className={s.menuButton}
                    onClick={onClickMenu}
                >
                    <Image
                        src='/static/menu.svg'
                        width={16}
                        height={14}
                    />
                </button>
            </header>

            <MobileMenu
                right
                width='100%'
                isOpen={isOpen}
                customBurgerIcon={false}
                customCrossIcon={false}
                className={s.mobileMenu}
                itemListClassName={s.mobileMenuList}
            >
                <button
                    className={s.closeMenu}
                    onClick={onClickMenu}
                >
                    <Image
                        src='/static/closeMenu.svg'
                        width={14}
                        height={14}
                    />
                </button>
                {props.menu}
            </MobileMenu>
        </ControlsContext.Provider>
    )
}