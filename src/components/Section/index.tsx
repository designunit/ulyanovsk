import classNames from 'classnames'
import s from './styles.module.css'

export type SectionProps = {
    backgroundColor?: string
    className?: string
}

export const Section: React.FC<SectionProps> = ({ backgroundColor = 'white', ...props }) => {
    return (
        <div className={classNames(s.stories, props.className)} style={{
            backgroundColor,
        }}>
            {props.children}
        </div>
    )
}