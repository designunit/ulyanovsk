import Image from 'next/image'
import React from 'react'
import { MapButton } from '../MapButton'
import { SectionParalaxedBack } from '../SectionParalaxedBack'
import { Title } from '../Title'

export const Map: React.FC = () => {
    return (
        <SectionParalaxedBack
            contentStyle={{
                width: '100%',
                height: '100%',
                paddingTop: '10%',
                paddingBottom: '10%',

                display: 'flex',
                justifyContent: 'center',
            }}
            back={(
                <>
                    <Image
                        src='/static/map.png'
                        layout='fill'
                        objectFit='cover'
                    />
                </>
            )}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: 'var(--color-blue)',
                    opacity: .5,
                    zIndex: -1,
                }}
            />
            <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: '8rem',

                width: '1000px',
                maxWidth: '100%',
            }}>
                <div>
                    <Title level={2} style={{
                        textAlign: 'center',
                        color: ' white',
                        fontSize: '3.5em',
                        textTransform: 'uppercase',
                        lineHeight: '1.1em',
                    }}>
                        Карта идей и предложений
                    </Title>
                </div>
                <MapButton />
            </div>
        </SectionParalaxedBack>
    )
}