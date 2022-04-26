import s from './styles.module.css'
import { Parallax } from 'react-scroll-parallax'
import { CSSProperties } from 'react'
import { useMobile } from 'src/hooks/useMobile'

export type SectionParalaxedBackProps = {
    back?: React.ReactNode
    sectionStyle?: CSSProperties
    contentStyle?: CSSProperties 
}

export const SectionParalaxedBack: React.FC<SectionParalaxedBackProps> = props => {
    const isMobile = useMobile()
        
    return (
        <section className={s.section} style={props.sectionStyle}>
            <div className={s.back}>
                <Parallax
                    y={[-50, 50]}
                    styleOuter={{
                        height: '100%',
                    }}
                    styleInner={{
                        height: '100%',
                    }}
                    disabled={isMobile}
                >
                    {props.back}
                </Parallax>
            </div>
            <div className={s.content} style={props.contentStyle}>
                {props.children}
            </div>
        </section>
    )
}