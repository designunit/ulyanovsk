import s from './styles.module.css'
import { Button } from '../Button'

export type JoinFormProps = {

}

export const JoinForm: React.SFC<JoinFormProps> = props => (
    <form className={s.form}>
        <div className={s.fields}>
            <div className={s.inputs}>
                <input 
                    className={s.field}
                    name='name'
                    placeholder='Ваше имя'
                />
            
                <input 
                    className={s.field}
                    name='email'
                    placeholder='Ваш email'
                />
            </div>
            <textarea 
                className={s.field}
                rows={4}
                placeholder='Расскажите свою историю...'
            />
        </div>
        
        <div className={s.bottom}>
            <Button
                theme='primary'
                disabled
            >
                Отправить заявку
            </Button>
            <p style={{ fontSize: '12px' }}>
                Нажимая кнопку “Отправить заявку” Я соглашаюсь на обработку персональных данных
            </p>
        </div>
    </form>
)