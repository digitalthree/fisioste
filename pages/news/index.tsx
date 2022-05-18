import type {InferGetStaticPropsType} from 'next'
import React from "react";
import {fetchNews} from "../api/news";
import {HeroNews} from "../../components/news/components/HeroNews";
import {GrigliaNews} from "../../components/news/components/GrigliaNews";

export async function getStaticProps() {

    let news = await fetchNews()

    return {
        props: {
            news,
        },
        revalidate: 10, // In seconds
    }
}


const News = ({news}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <HeroNews/>
            <GrigliaNews news={news}/>
        </>
    )
}

export default News