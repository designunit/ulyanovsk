import { createContext } from 'react'

export type Config = {
    mapUrl: string
}

export const defaultConfig: Config = {
    mapUrl: 'https://mesto.io/D3CJ49RMCQQ46N0V',
}

export const ConfigContext = createContext<Config>(defaultConfig)
