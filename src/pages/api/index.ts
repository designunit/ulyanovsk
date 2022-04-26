import { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await axios.post(
        'https://script.google.com/macros/s/AKfycbyihfTZdfTieKoGuOMTsYrI39SCghw-jr0YHxaZqn3UrOOK7-Eub7GE/exec',
        req.body as string,
    )
        .then((axiosRes: AxiosResponse) => {
            res
                .status(axiosRes.status)
                .json(axiosRes.data)
        })
}