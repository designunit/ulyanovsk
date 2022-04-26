import { createContext } from 'react'

export type Config = {
    mapUrl: string
}

export const defaultConfig: Config = {
    mapUrl: 'https://map.latl.ng/A4XNPDSKXZJ7N4CR',
}

export const ConfigContext = createContext<Config>(defaultConfig)
