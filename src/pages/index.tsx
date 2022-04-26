import Head from 'next/head'
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
}

const Index: NextPage<PageProps> = ({ newsData, heroData }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <PageLayout
            openModal={() => setModalIsOpen(true)}
        >
            <ParallaxProvider>

                <Modal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                />

                <Hero
                    data={heroData.data}
                    openModal={() => setModalIsOpen(true)}
                />

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

    return {
        props: {
            newsData,
            heroData,
        }
    }
}

export default Index