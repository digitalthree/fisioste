import React from 'react';
import Image from "next/image";

interface SpecialistiBenessereProps {
}

export const SpecialistiBenessere: React.FC<SpecialistiBenessereProps> = ({}) => {
    return(
        <div className="w-full bg-[#e1edff] pt-16 pb-16 flex justify-center">
            <div className="container text-center">
                <h1 className="text-black">
                    {/*Specialisti del <span className="text-secondary">benessere</span>*/}
                    a differenza degli altri le nostre specializzazioni sono
                </h1>
                <div className="grid lg:grid-cols-3 lg:gap-32 mt-16 ">
                    <div className="flex flex-col justify-between items-center mb-28 lg:mb-0"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/colonna.webp'} width="130px" height="130px" layout="fixed" alt="Fisioste colonna"/>
                        <h2 className="text-[25px] text-secondary">Clinica della colonna</h2>
                        <div className="p-5 rounded-2xl bg-white mt-3">
                            <p className="text-secondary">
                                Per combattere tutte le cause del mal di schiena:
                                Ernia del disco, disfunzioni di movimento, alterazioni posturali,
                                stress, artrosi.
                            </p>
                        </div>
                        <button className='px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80'>SCOPRI DI PIU</button>
                    </div>
                    <div className="flex flex-col justify-between items-center mb-28 lg:mb-0"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-delay="500"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/fisioestetica.webp'} width="130px" height="130px" layout="fixed" alt="Fisioste fisioestetica"/>
                        <h2 className="text-[25px] text-secondary">Fisioestetica dermatofunzionale</h2>
                        <div className="p-5 rounded-2xl bg-white mt-3">
                            <p className="text-secondary">
                                Trattamento di: cellulite, tessuto adiposo localizzato,
                                smagliature dimagrimento, gambe gonfie e pesanti.
                            </p>
                        </div>
                        <button className='px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white hover:opacity-80'>SCOPRI DI PIU</button>
                    </div>
                    <div className="flex flex-col justify-between items-center"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/tendinopatie.webp'} width="130px" height="130px" layout="fixed" alt="Fisioste tendinopatie"/>
                        <h2 className="text-[25px] text-secondary">Clinica delle tendinopatie</h2>
                        <div className="p-5 rounded-2xl bg-white mt-3">
                            <p className="text-secondary">
                                Risoluzione di tutte quelle patologie che affliggono i tendini sia nella
                                vita quotidiana che in quella sportiva.
                            </p>
                        </div>
                        <button className='px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white hover:opacity-80'>SCOPRI DI PIU</button>
                    </div>
                </div>
            </div>
        </div>
    )

}