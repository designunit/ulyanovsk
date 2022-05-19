import { SectionParalaxedBack } from '../SectionParalaxedBack'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import useSpring from 'react-use/lib/useSpring'
import { useState } from 'react'
import s from './styles.module.css'
import { Title } from '../Title'
import { useMobile } from 'src/hooks/useMobile'

export const Numbers = () => {
    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const [three, setThree] = useState(0)
    const [four, setFour] = useState(0)
    const [five, setFive] = useState(0)

    const valOne = useSpring(one)
    const valTwo = useSpring(two)
    const valThree = useSpring(three)
    const valFour = useSpring(four)
    const valFive = useSpring(five)

    const { ref, inView } = useInView({
        triggerOnce: true,
        onChange: (inView) => {
            if (!inView) { return }
            setOne(3)
            setTwo(8)
            setThree(422)
            setFour(17000)
            setFive(985000)
        }
    })

    const data = [
        {
            num: valOne.toFixed(0),
            text: 'ГОРОДСКИХ ОКРУГА',
        },
        {
            num: valTwo.toFixed(0),
            text: 'МУНИЦИПАЛЬНЫХ РАЙОНОВ',
        },
        {
            num: valThree.toFixed(0),
            text: 'НАСЕЛЕННЫХ ПУНКТА',
        },
        {
            num: null,
            text: '',
        },
        {
            num: valFour.toFixed(0),
            text: 'КВАДРАТНЫХ КИЛОМЕТРОВ',
        },
        {
            num: valFive.toFixed(0),
            text: 'ЖИТЕЛЕЙ',
        },
    ]

    const isMobile = useMobile()
    return (
        <>
            <SectionParalaxedBack
                contentStyle={{
                    width: '100%',
                    height: '100%',
                    flex: '1 0 100%',
                    display: 'flex',
                }}
                back={(
                    <>
                        <Image
                            src='/static/urb_count.png'
                            layout='fill'
                            objectFit='cover'
                            quality={90}
                            objectPosition={isMobile && '-100% 0%'}
                            style={{
                                background: '#377EB8',
                            }}
                        />
                    </>
                )}
            >
                <div
                    ref={ref}
                    className={s.numContainer}
                >
                    {data.map((x, i) => (
                        <div
                            key={i}
                            className={s.item}
                        >
                            <div style={{ height: '6rem' }}>
                                <Title style={{
                                    fontSize: '6rem',
                                    lineHeight: '6rem',
                                    color: 'white',
                                }}>
                                    {x.num}
                                </Title>
                            </div>
                            <div style={{ fontSize: '1.5rem' }}>
                                {x.text}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionParalaxedBack>
        </>
    )
}