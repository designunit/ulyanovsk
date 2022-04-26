import styles from './styles.module.css'
import { PageLayout } from '../PageLayout'

type SlidesProps = {
    images: string[]
}

export const Slides: React.SFC<SlidesProps> = props => {
    return (
        <PageLayout>
            <div className={styles.slides}>
                {props.images.map(x => (
                    <img
                        key={x}
                        className={styles.picture}
                        src={x}
                    />
                ))}
            </div>
        </PageLayout>
    )
}
