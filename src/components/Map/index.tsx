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
                        src='/static/mapPreview.jpg'
                        layout='fill'
                        objectFit='cover'
                    />
                </>
            )}
        >
            <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',

                width: '1000px',
                maxWidth: '100%',
            }}>
                <div>
                    <Title level={2}>
                        Карта идей и предложений
                    </Title>
                </div>
                <MapButton />
            </div>
        </SectionParalaxedBack>
    )
}