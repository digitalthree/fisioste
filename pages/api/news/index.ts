import type { NextApiRequest, NextApiResponse } from 'next'
import {News, news} from "../../../data/news";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<News[]>
) {
    const news = await fetchNews()

    res.status(200).json(news)
}

export async function fetchNews() {
    return news;
}
