import React from 'react';
import {ImQuotesLeft} from "react-icons/im";

import Image from 'next/image'

interface DiconoDiNoiProps {
}

export const DiconoDiNoi: React.FC<DiconoDiNoiProps> = ({}) => {
    return (
        <div className="bg-[#d8e8ff] flex flex-col py-16"
             style={{
                 backgroundImage: "url(/img/home/diconodinoi1.webp)",
                 backgroundRepeat: "no-repeat",
                 backgroundPosition: "90%",
                 backgroundSize: "auto",
             }}
        >
            <div className="container m-auto">
                <div>
                    <div
                        className="sm:text-left text-center"
                        data-aos="fade-out"
                        data-aos-duration="1500"
                        data-aos-once="true"
                    >
                        <h1 className="mb-2">Dicono di <span className="text-secondary">Noi</span></h1>
                        <hr className="border border-secondary w-[100px] mb-5 mx-auto sm:mx-0"/>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-3 lg:gap-24 mt-14">
                        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-4"
                             data-aos="slide-up"
                             data-aos-duration="1000"
                             data-aos-once="true"
                        >
                            <Image src="/img/home/sarah.png" width="80px" height="80px" layout="fixed" alt="recensione"/>
                            <div className="col-span-2 md:col-span-5 lg:col-span-2 flex flex-col">
                                <ImQuotesLeft size={30} color="#264193"/>
                                <p className="text-[13px] font-normal ">La loro professionalità, la puntualità, l’ambiente confortevole, l’avanguardia dei macchinari che trovi entrando da Fisioste, non ha paragoni! Per non parlare della splendida vista del Gran Sasso. Non avrei potuto scegliere di meglio. Grazie Stefano per la tua gentilezza. Sei il migliore!</p>
                                <h3 className="text-[13px] font-bold">Sarah Michini</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-4"
                             data-aos="slide-up"
                             data-aos-duration="1000"
                             data-aos-once="true"
                             data-aos-delay="500"
                        >
                            <Image src="/img/home/andrea.png" width="80px" height="80px" layout="fixed" alt="recensione"/>
                            <div className="col-span-2 md:col-span-5 lg:col-span-2 flex flex-col">
                                <ImQuotesLeft size={30} color="#264193"/>
                                <p className="text-[13px] font-normal ">{"Ho iniziato ad andare Fisioste da circa un mese il centro è una piccola oasi nel nel mezzo di una uggiosa Teramo veramente fantastico. Un ambiente molto familiare e professionale dalla reception con l'assistant manager Francesca, fino alla fisioterapista Dott.ssa Sara che è sempre gentilissima, solare e molto preparata. Anche il dottor Stefano che è  disponibile ed è riuscito a sbloccarmi punti che neanche sapevo di avere! Assolutamente raccomandato, vi consiglio di provarlo almeno una volta non ve ne pentirete!"}</p>
                                <h3 className="text-[13px] font-bold">Andrea De Bonis</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-4"
                             data-aos="slide-up"
                             data-aos-duration="1000"
                             data-aos-once="true"
                             data-aos-delay="1000"
                        >
                            <Image src="/img/home/anna.png" width="80px" height="80px" layout="fixed" alt="recensione"/>
                            <div className="col-span-2 md:col-span-5 lg:col-span-2 flex flex-col">
                                <ImQuotesLeft size={30} color="#264193"/>
                                <p className="text-[13px] font-normal ">Professionalità, competenza, gentilezza, cordialità, efficienza, puntualità, precisione, sono le parole chiave per definire questo Centro. Un vero paradiso del benessere. Grazie a tutto lo staff. Mi sento...rinata!</p>
                                <h3 className="text-[13px] font-bold">Anna Di Pietro</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-full text-center"
                         data-aos="flip-left"
                         data-aos-duration="1000"
                         data-aos-once="true"
                         data-aos-delay="1000"
                    >
                        <a className='px-8 py-2 md:py-4 text-sm sm:text-[14px] mt-20 rounded-full bg-secondary font-bold text-white hover:opacity-80'
                           href="https://www.google.com/search?channel=fs&client=ubuntu&q=fisioste#lrd=0x1331e7ee58fca7f9:0xdb916a89166a4be5,1,,,"
                           target="_blank"
                           rel="noreferrer"
                        >
                            VISUALIZZA TUTTE LE TESTIMONIANZE
                        </a>
                    </div>

                </div>
            </div>


        </div>
    )

}