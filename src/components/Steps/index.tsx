import s from './styles.module.css'

export const Steps: React.SFC = props => (
    <div className={s.container}>
        {props.children}
    </div>
)
