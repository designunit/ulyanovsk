import Head from 'next/head'
import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Meta, IMeta } from 'src/components/Meta'
import { About } from 'src/components/About'
import { Footer } from 'src/components/Footer'
import { PageLayout } from 'src/components/PageLayout'
import { Map } from 'src/components/Map'
import { Votes } from 'src/components/Votes'
import React, { useState } from 'react'
import { Roadmap } from 'src/components/Roadmap'
import { Faq } from 'src/components/Faq'
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
    
                <span id='votes' />
                <Votes />
    
                <span id='about' />
                <About />
    
                <span id='roadmap' />
                <Roadmap />
    
                <span id='map' />
                <Map />
    
                <span id='faq' />
                <Faq />
    
                <Footer />
    
                <span id='stories' />
                {/* {true ? null : (
                    <Section backgroundColor={'rgba(204, 215, 255, 0.5)'}>
                        <Title level={2}>Жители о набережной</Title>
    
                        <Story
                            condition='left'
                            picturePath='/static/annaizumova.png'
                        >
                            <Article>
                                <Title level={3}>Анна Изюмова</Title>
                                <Caption>
                                    центр молодежи и дополнительного образования
                        </Caption>
    
                                <p>
                                    Молодежному центру на набережной интересна фестивальная деятельность. Абсолютно разные фестивали: и декоративно-прикладные, и музыкальные, и хобби различные.
                        </p>
                                <p>
                                    Для меня важнее всего чтобы она оставалась рентабельной, чтобы там не было чего-то нагроможденного. Что-то мобильное, максимально полезное. Оставить площадку для волейбола, в другом месте ее организовать нельзя. Сцена нужна. Для массовых мероприятий на набережной большое пространство, там и дискотеки молодежные, они хоть в городе мешать не будут.
                        </p>
                                <p>
                                    Чтобы не повторять особенности наших городских площадей, надо, чтобы на этой территории были скверы, лавочки. Ещё нужно что-то такое, чтобы можно было детям и взрослым где-то быть. А вот ту, пустую территорию, использовать с минимальными затратами. Мне кажется, это самое лучшее применение: небольшие точечные культурные облагораживания и всё! Лишнего ничего не нужно туда. Мне кажется, что нельзя против природы идти, наоборот нужно использовать то что имеется максимально.
    
                        </p>
                            </Article>
                        </Story>
                        <Story
                            condition='left'
                        >
                            <Article>
                                <Title level={3}>
                                    Попова Лариса Анатольевна
                        </Title>
                                <Caption>
                                    заместитель директора по УВР школы №6
                        </Caption>
    
                                <p>
                                    Физкультура может проходить на набережной, ИЗО и окружающий мир может быть, если будут какие-то аллеи и зоны.
                        </p>
                                <p>
                                    Вот, например, у нас по школьной программе идут сезонные экскурсии: осенне- весенние изменения в природе, зимние изменения в природе, и зачастую мы просто гуляем по территории школы. Один год погуляли — на следующий год уже не интересно. А поскольку территория набережной больше, то и интереса там погулять и понаблюдать будет больше. У нас очень красивая река, очень красивый лес.
                        </p>
                            </Article>
                        </Story>
                        <Story
                            condition='left'
                            picturePath='/static/antonarguchinsky.png'
                        >
                            <Article>
                                <Title level={3}>
                                    Антон Аргучинский
                        </Title>
                                <Caption>
                                    предприниматель, активный житель
                        </Caption>
    
                                <p>
                                    Да не нужно какой-то прям инфраструктуры, банальное подключение к электричеству. У меня много друзей играющих на электроинструментах. Мы собираемся, они начинают исполнять известные композиции и петь. И молодёжи это заходит. Да и на сцене можно и стендап проводить, и поиграть с детьми, да даже музыку просто включить. У нас сейчас набирает обороты брейк данс, проводили бы театр на свежем воздухе. Но всё же проблема с электричеством, а возить генераторы не каждый себе может позволить. Главное электричество, а дальше уже и пойдет, идеи будут, и это будет пользоваться спросом.
                        </p>
                            </Article>
                        </Story>
                        <Story
                            condition='left'
                        >
                            <Article>
                                <Title level={3}>
                                    Парфентьева Алла Александровна
                        </Title>
                                <Caption>
                                    директор управления градостроительства, землепользования и природопользования города Урай
                        </Caption>
    
                                <p>
                                    Раньше в Колосье купались каждый вечер летом, пока жили на берегу. Прогулки с детьми, купание. Катание с горки на санках, катание на лыжах от 2 микрорайона до 3. Рыбу ловили постоянно и зимой и летом. Грибы собирали постоянно на другом берегу. С собаками постоянно гуляли и гуляем  — целое братство там. Просто закат посмотреть или радугу над Кондой!
                        </p>
                                <p>
                                    Набережная объединяет два микрорайона, удобна для прогулок, транзита, вроде рядом с жилыми районами, и в то же время оказываешься на природе. Река успокаивает и притягивает.
                        </p>
                                <p>
                                    Это место для разных сообществ. Места всем хватит: и бабушкам, и спортсменам, и собачникам. Должны быть спокойные уютные местечки и места сбора, где можно пошуметь, потанцевать, покричать.
                        </p>
                            </Article>
                        </Story>
                        <Button
                            size='big'
                            href='https://docs.google.com/forms/d/e/1FAIpQLSfoGigVnGxanZPdSK09A8xZ8APUgPeyePbG_nI9USyEg7hiUA/viewform'
                        >
                            Поделись мнением
                </Button>
                    </Section>
                )} */}
    
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