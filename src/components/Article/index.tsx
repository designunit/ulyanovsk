import s from './styles.module.css'

export const Article: React.SFC = props => (
    <article className={s.article}>
        {props.children}
    </article>
)