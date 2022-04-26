import s from './styles.module.css'

export type SectionProps = {
    backgroundColor?: string
}

export const Section: React.FC<SectionProps> = ({ backgroundColor = 'white', ...props }) => {
    return (
        <div className={s.stories} style={{
            backgroundColor,
        }}>
            {props.children}
        </div>
    )
}