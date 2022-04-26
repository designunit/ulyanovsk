import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import Link from 'next/link'
import sm from './sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

export const internalLinkComponent = ({ href, children, ...props }) => (
    <Link href={href}>
        <a {...props}>
            {children}
        </a>
    </Link>
)

// This factory function allows smooth preview setup
export function createClient(config: any = {}) {
    const client = prismic.createClient(endpoint, {
        ...config,
    })


    enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    })

    return client
}