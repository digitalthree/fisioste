import React from 'react';
import {InferGetStaticPropsType} from "next";
import {useRouter} from "next/router";
import {fetchNews} from "../api/news";
import {FactoryNews} from "../../components/news/articoli/FactoryNews";
import {Carosello, CaroselloItem} from "../../components/shared/Carosello";

export async function getStaticPaths() {

    let news = await fetchNews()

    const paths = news.map(n => {
        return {params: {idNews: n.id.toString()}}
    })

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps() {

    let news = await fetchNews()

    return {
        props: {
            news
        },
        revalidate: 10, // In seconds
    }
}

const ServizioSpecifico = ({news}: InferGetStaticPropsType<typeof getStaticProps>) => {

    const router = useRouter()
    const { idNews } = router.query
    let newsSelezionata = news.filter(n => n.id === parseInt(idNews as string))[0]

    let itemsCarosello: CaroselloItem[] = news.map(n => {
        return {
            id: n.id,
            imgUrl: n.imgUrl,
            nome: n.titolo,
            descrizione: n.descrizione,
            tipo: 'news'
        }
    })


    if(newsSelezionata){
        return(
            <>
                <div
                    className="h-[48vh] lg:h-[40vh] bg-gradient-to-t from-white to-[#d8e8ff] hidden md:flex justify-start bg-no-repeat"
                    style={{
                        backgroundImage: `url(${newsSelezionata.bannerImgUrl})`,
                        backgroundSize: "cover",
                    }}
                >
                    <div className="container m-auto">
                        <h1 className="text-secondary">{newsSelezionata.titolo}</h1>
                        {/*<hr className="border border-secondary w-[200px] mt-2 mb-4"/>*/}
                    </div>
                </div>


                <div className="h-[48vh] md:hidden lg:h-[55vh] p-2 flex justify-start bg-no-repeat bg-auto"
                     style={{
                         backgroundImage: `url(${newsSelezionata.imgUrl})`,
                         backgroundSize: "cover",
                     }}
                >
                    <div className="container m-auto">
                        <h1 className="text-secondary">{newsSelezionata.titolo}</h1>
                        {/*<hr className="border border-secondary w-[200px] mt-2 mb-4"/>*/}
                    </div>
                </div>
                <div className="container pt-10 pb-20 m-auto">
                    {/*<FactoryServizi servizio={servizioSelezionato.name}/>*/}
                    <FactoryNews idNews={newsSelezionata.id}/>
                    <h2 className="mt-10 text-secondary mb-10 text-[25px]">Altri Articoli</h2>
                    <Carosello data={itemsCarosello}/>
                </div>
            </>
        )
    }


}

export default ServizioSpecifico