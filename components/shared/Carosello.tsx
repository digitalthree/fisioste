import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {Servizio} from "../../pages/api/servizi";
import {Carousel} from "react-responsive-carousel";
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from "react-icons/fa";
import {RiArrowRightSLine, RiArrowLeftSLine} from "react-icons/ri";

export interface CaroselloItem {
    id: number,
    imgUrl: string,
    nome: string,
    descrizione: string,
    tipo: 'servizio' | 'news'
}

interface CaroselloProps {
    data: CaroselloItem[]
}

export const Carosello: React.FC<CaroselloProps> = ({data}) => {

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, []);

    return(
        <div className="col-span-3 w-full lg:my-auto">
            <Carousel showArrows showIndicators={false} showStatus={false} showThumbs={false} centerMode={screenWidth >= 1440}
                      centerSlidePercentage={33}
                      autoPlay
                      infiniteLoop
                      selectedItem={1}
                      renderArrowPrev={(clickHandler, hasNext, label) => {
                          return (
                              <>
                                  {hasNext && <div className="absolute top-1/2 left-0 z-30" onClick={clickHandler}>
                                      <RiArrowLeftSLine color="#264193" size="25px"/>
                                  </div>
                                  }
                              </>

                          )
                      }}
                      renderArrowNext={(clickHandler, hasNext, label) => {
                          return (
                              <>
                                  {hasNext && <div className="absolute top-1/2 right-0 z-30 hover:cursor-pointer" onClick={clickHandler}>
                                      <RiArrowRightSLine color="#264193" size="25px"/>
                                  </div>
                                  }
                              </>

                          )
                      }}
            >
                {data.map(item => {
                    return(
                        <div key={item.id} className="px-12 lg:px-8 h-full">
                            <div className="flex flex-col items-start text-left h-full justify-around pb-2">
                                <div className="rounded-3xl w-full p-20 md:p-44 lg:p-20 mb-4"
                                     style={{
                                         backgroundImage: `url(${item.imgUrl})`,
                                         backgroundSize: 'cover',
                                         backgroundPositionY: (item.id !== 5) ? "-50px" : "0px",
                                         backgroundRepeat: "no-repeat"
                                     }}
                                />

                                <h2 className="text-[25px] font-light">{item.nome}</h2>
                                <hr className="border border-primary w-[100px] mt-4"/>
                                <div className="mt-4">
                                    <p className="text-justify text-[14px]">
                                        {(item.descrizione.length > 180) ? item.descrizione.substring(0, 180) + '...' : item.descrizione}
                                    </p>
                                </div>
                                <Link href={`${item.tipo === 'servizio' ? `/servizi/${item.id}` : `/news/${item.id}`}`}>
                                    <button
                                        className='px-8 py-2 mt-2 w-full mt-5 rounded-full text-[12px] text-secondary border-2 border-secondary hover:bg-secondary hover:text-white'>SCOPRI
                                        DI PIU
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )

}