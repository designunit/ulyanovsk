import Link from 'next/link'
import s from './styles.module.css'

export type LogoProps = {
    style?: React.CSSProperties
}

export const Logo: React.SFC<LogoProps> = props => {
    // const router = useRouter()
    // const main = router.asPath === '/'

    return (
            <Link href='/'>
                <a className={s.logo} style={props.style}>
                    Набережная В. Тура
                </a>
            </Link>
    )
}