import s from './styles.module.css'
import { Bubble } from '../Bubble'

const Ratio: React.FC<{ ratio: number, className?: string }> = props => (
    <div className={props.className} style={{
        width: '100%',
        height: 0,
        position: 'relative',
        paddingBottom: `${props.ratio * 100}%`,
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}>
            {props.children}
        </div>
    </div>
)

export type StoryProps = {
    picturePath?: string
    title?: React.ReactNode
    subtitle?: React.ReactNode
    text?: React.ReactNode
    condition: 'left' | 'faq' // no longer indicates side of picture but no time to rename
}

export const Story: React.FC<StoryProps> = props => (
    <div className={`${s.container}`}>
        <div className={s.avatar} style={{display: props.condition === 'faq'  ? 'none' : undefined, }}>
        {!props.picturePath ? null : (
            <Ratio ratio={1}>
                <Bubble
                    style={{
                        position: 'absolute',
                        maxWidth: '100vw',
                        maxHeight: '100%',
                        height: '100%',
                        width: '100%',
                        transform: 'scale(1.5)',
                    }}
                    color='#B1F4EC'
                />
                <Bubble
                    style={{
                        position: 'absolute',
                        maxWidth: '100vw',
                        maxHeight: '100%',
                        height: '100%',
                        transform: 'scale(1.25)',
                        width: '100%',
                    }}
                    color='#FFD166'
                />
                <img
                    src={props.picturePath}
                />
            </Ratio>
        )}
        </div>

        <div className={s.spacer} style={{display : props.condition === 'faq' ? 'none' : undefined}} />

        <div className={s.text}>
            <div className={s.header}>
                <span className={s.title}> {props.title} </span>
                <span className={s.subtitle}>{props.subtitle}</span>
            </div>
            {props.text}
            {props.children}
        </div>
    </div>
)
