import s from './styles.module.css'

export type StepProps = {
    title: string
}

export const Step: React.SFC<StepProps> = props => (
    <div className={s.step}>
        <div className={s.head}>
            <h3>
                {props.title}
            </h3>
        </div>
        <div>
            {props.children}
        </div>
    </div>
)