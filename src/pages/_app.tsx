import 'src/style.css'
import 'src/style/react-modal.css'

import { ConfigContext, defaultConfig } from 'src/context/config'
import { ControlsContext } from 'src/context/controls'
import { AppType } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import { PrismicProvider } from '@prismicio/react'
import { internalLinkComponent, repositoryName } from 'prismicio'
import { PrismicPreview } from '@prismicio/next'

const App: AppType = ({ Component, pageProps }) => {
    return (
        <ConfigContext.Provider value={defaultConfig}>
            <ControlsContext.Provider
                value={{
                    shape: 'default',
                    size: 'default',
                }}
            >
                <Head>
                    <meta charSet='utf-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, maximum-scale=1.0'
                    />
                </Head>

                <PrismicProvider
                    internalLinkComponent={internalLinkComponent}
                >

                    <PrismicPreview repositoryName={repositoryName}>
                        <Component {...pageProps} />
                    </PrismicPreview>
                </PrismicProvider>
            </ControlsContext.Provider>
        </ConfigContext.Provider>
    )
}

export default App
