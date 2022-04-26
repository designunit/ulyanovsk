import s from './styles.module.css'
import { useContext } from "react"
import { ConfigContext } from 'src/context/config'
import Link from "next/link"


export const MapButton: React.FC = props => {
    const { mapUrl } = useContext(ConfigContext)

    return (
        <Link href={mapUrl}>
            <a className={s.container}>
                <div className={s.button}>
                    <span>
                        Отметь идею<br/>
                        на карте
                    </span>
                </div>
            </a>
        </Link>
    )
}