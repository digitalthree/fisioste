import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface SpecialistiBenessereProps {
}

export const SpecialistiBenessere: React.FC<SpecialistiBenessereProps> = ({}) => {
    return (
        <div className="w-full bg-[#e1edff] pt-16 pb-16 flex justify-center">
            <div className="container text-center">
                <h1 className="text-secondary">
                    {/*Specialisti del <span className="text-secondary">benessere</span>*/}
                    Siamo specializzati in
                </h1>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 mt-16 ">
                    <div className="flex flex-col justify-between items-center mb-28 lg:mb-0"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/colonna.webp'} width="130px" height="130px" layout="fixed"
                               alt="Fisioste colonna"/>
                        <h2 className="text-[25px] text-secondary">Clinica della colonna</h2>
                        <div className="p-5 rounded-2xl bg-white mt-3">
                            <p className="text-secondary">
                                Per combattere tutte le cause del mal di schiena:
                                Ernia del disco, disfunzioni di movimento, alterazioni posturali,
                                stress, artrosi.
                            </p>
                        </div>
                        <Link href="/servizi/16" passHref>
                            <button
                                className='px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80'>SCOPRI
                                DI PIU
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between items-center mb-28 lg:mb-0"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-delay="500"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/fisioestetica.webp'} width="130px" height="130px" layout="fixed"
                               alt="Fisioste fisioestetica"/>
                        <h2 className="text-[25px] text-secondary">Fisioestetica dermatofunzionale</h2>
                        <div className="p-5 rounded-2xl bg-white mt-3">
                            <p className="text-secondary">
                                Trattamento di: cellulite, tessuto adiposo localizzato,
                                smagliature dimagrimento, gambe gonfie e pesanti.
                            </p>
                        </div>
                        <Link href="/servizi/2" passHref>
                            <button
                                className='px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80'>SCOPRI
                                DI PIU
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between items-center mb-28 lg:mb-0"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/tendinopatie.webp'} width="130px" height="130px" layout="fixed"
                               alt="Fisioste tendinopatie"/>
                        <h2 className="text-[25px] text-secondary">Clinica delle tendinopatie</h2>
                        <div className="p-5 rounded-2xl bg-white mt-3">
                            <p className="text-secondary">
                                Risoluzione di tutte quelle patologie che affliggono i tendini sia nella
                                vita quotidiana che in quella sportiva.
                            </p>
                        </div>
                        <Link href="/news/4" passHref>
                            <button
                                className='px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80'>SCOPRI
                                DI PIU
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between items-center"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/fisio_donna.webp'} width="110px" height="110px" layout="fixed"
                               alt="Fisioste tendinopatie"/>
                        <h2 className="text-[25px] text-secondary">Fisioterapia Donna</h2>
                        <div className="p-5 rounded-2xl bg-white mt-3">
                            <p className="text-secondary">
                                Trattamenti dedicati alla donna per la cura delle disfunzioni del pavimento
                                pelvico, pre/post parto, incontinenza, dolori mestruali, endometriosi etc.
                            </p>
                        </div>
                        <Link href="/news/7" passHref>
                            <button
                                className='px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80'>SCOPRI
                                DI PIU
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}