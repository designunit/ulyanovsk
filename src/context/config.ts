import { createContext } from 'react'

export type Config = {
    mapUrl: string
}

export const defaultConfig: Config = {
    mapUrl: '/',
}

export const ConfigContext = createContext<Config>(defaultConfig)
