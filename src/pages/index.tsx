import Head from 'next/head'
import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Meta, IMeta } from 'src/components/Meta'
import { About } from 'src/components/About'
import { Footer } from 'src/components/Footer'
import { PageLayout } from 'src/components/PageLayout'
import { Map } from 'src/components/Map'
import React, { useState } from 'react'
import { Modal } from 'src/components/Modal'

interface PageProps {
    meta: IMeta
}

const Index: NextPage<PageProps> = props => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <PageLayout
            openModal={() => setModalIsOpen(true)}
        >
            <ParallaxProvider>
                <Head>
                    <title>Набережная г. Верхняя Тура</title>
                    <Meta meta={props.meta} />
                </Head>
    
                <Modal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                />
    
                <Hero
                    openModal={() => setModalIsOpen(true)}
                />

                <About />
    
                <Map />
    
                <Footer />    
            </ParallaxProvider>
        </PageLayout>
    )
}


export const getStaticProps = async () => {
    const meta: IMeta = {
        title: 'Набережная г. Верхняя Тура',
        description: 'Предлагайте идеи и делитесь своими историями города и Верхнетуринского пруда',
        image: 'https://верхняятура.рф/static/hero.jpg',
        imageWidth: 1200,
        imageHeight: 717,

        url: 'https://верхняятура.рф/',
        siteName: 'Набережная г. Верхняя Тура',
        locale: 'ru_RU',
        type: 'website',
        domain: 'верхняятура.рф',

        twitterCard: 'summary_large_image',
        twitterSite: '@',
        twitterCreator: '@tmshv',
    }

    return {
        props: {
            meta,
        }
    }
}

export default Index