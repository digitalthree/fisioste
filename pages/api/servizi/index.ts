import type { NextApiRequest, NextApiResponse } from 'next'
import {servizi} from "../../../data/servizi";

export type Servizio = {
    id:number,
    name: string,
    imgUrl: string,
    bannerImgUrl: string,
    bannerImgUrlTablet: string,
    bannerImgUrlMobile: string,
    description: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Servizio[]>
) {
    const servizi = await fetchServizi()

    res.status(200).json(servizi)
}

export async function fetchServizi() {
    return servizi;
}
