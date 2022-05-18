import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import Link from "next/link";
import {Carousel} from "react-responsive-carousel";

interface LeNostreConvenzioniProps {
}

export const LeNostreConvenzioni: React.FC<LeNostreConvenzioniProps> = ({}) => {

    let data = [
        {id: 1, imgUrl: '/img/convenzioni/conv1.jpg', width: '250px', height: '150px', alt: 'cnvenzione 1'},
        {id: 2, imgUrl: '/img/convenzioni/conv2.jpg', width: '250px', height: '150px', alt: 'cnvenzione 2'},
        {id: 3, imgUrl: '/img/convenzioni/conv3.jpg', width: '250px', height: '150px', alt: 'cnvenzione 3'},
        {id: 4, imgUrl: '/img/convenzioni/conv4.jpg', width: '250px', height: '150px', alt: 'cnvenzione 4'},
        {id: 5, imgUrl: '/img/convenzioni/conv5.jpg', width: '250px', height: '150px', alt: 'cnvenzione 5'},
        {id: 6, imgUrl: '/img/convenzioni/conv6.jpg', width: '250px', height: '150px', alt: 'cnvenzione 6'},
        {id: 7, imgUrl: '/img/convenzioni/conv7.jpg', width: '300px', height: '93px', alt: 'cnvenzione 7'},
    ]

    let convenzioniPrimaRiga = data.filter(d => d.id < 5)
    let convenzioniSecondaRiga = data.filter(d => d.id > 4)


    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, []);

    return(
        <>
            <div className="container m-auto flex py-16 flex-col ju items-center text-center">
                <div
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    className="xl:mb-20 mb-10"
                >
                    <h1 className="mb-2">Le nostre <span className="text-secondary">convenzioni</span></h1>
                    <hr className="border border-gray-600 w-[100px] mb-5 mx-auto"/>
                    <h2>
                        Scopri l’elenco delle nostre convenzioni costantemente aggiornato per te.
                    </h2>
                </div>
                {/*<Carousel showArrows showIndicators={false} showStatus={false} showThumbs={false}
                          centerSlidePercentage={33}
                          autoPlay
                          infiniteLoop
                          centerMode={screenWidth >= 1440}
                >
                    {data.map(item => {
                        return(
                            <div key={item.id} className="flex items-center justify-center h-full">
                                <Image
                                    src={item.imgUrl}
                                    width={item.width}
                                    height={item.height}
                                    layout="intrinsic"
                                    alt={item.alt}
                                />
                            </div>
                        )
                    })}
                </Carousel>*/}
                <div className="grid md:grid-cols-4 md:gap-20 md:mb-8"
                     data-aos="zoom-in"
                     data-aos-duration="1000"
                     data-aos-once="true"
                >
                    {convenzioniPrimaRiga.map(item => {
                        return(
                            <div key={item.id} className="flex items-center justify-center h-full">
                                <Image
                                    src={item.imgUrl}
                                    width={item.width}
                                    height={item.height}
                                    layout="intrinsic"
                                    alt={item.alt}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="grid md:grid-cols-3 md:gap-20"
                     data-aos="zoom-in"
                     data-aos-duration="1000"
                     data-aos-once="true"
                >
                    {convenzioniSecondaRiga.map(item => {
                        return(
                            <div key={item.id} className="flex items-center justify-center h-full">
                                <Image
                                    src={item.imgUrl}
                                    width={item.width}
                                    height={item.height}
                                    layout="intrinsic"
                                    alt={item.alt}
                                />
                            </div>
                        )
                    })}
                </div>
                <h2 className="text-center md:mt-20 mt-10"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >Elenco in continuo aggiornamento</h2>
            </div>
        </>
    )

}