import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Footer } from 'src/components/Footer'
import { PageLayout } from 'src/components/PageLayout'
import { Map } from 'src/components/Map'
import React, { useState } from 'react'
import { Modal } from 'src/components/Modal'
import { createClient } from 'prismicio'
import { News } from 'src/components/News'

interface PageProps {
    newsData: any
    heroData: any
    pollData: any
}

const Index: NextPage<PageProps> = ({ newsData, heroData, pollData }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <PageLayout
            openModal={() => setModalIsOpen(true)}
        >
            <ParallaxProvider>

                <Modal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    data={pollData.data}
                />

                <Hero
                    data={heroData.data}
                    openModal={() => setModalIsOpen(true)}
                />

                <span id='news' />
                <News data={newsData.data.slices} />

                <span id='map' />
                <Map />

                <Footer />
            </ParallaxProvider>
        </PageLayout>
    )
}


export const getStaticProps = async ({ previewData }) => {
    const client = createClient({ previewData })
    const newsData = await client.getSingle('news')
    const heroData = await client.getSingle('hero')
    const pollData = await client.getSingle('poll')

    return {
        props: {
            newsData,
            heroData,
            pollData,
        }
    }
}

export default Index