import React, {useState} from 'react';
import {Servizio} from "../../../pages/api/servizi";
import {Carosello, CaroselloItem} from "../../shared/Carosello";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from "react-countup";

interface ServiziProps {
    servizi: Servizio[]
}

export const Servizi: React.FC<ServiziProps> = ({servizi}) => {

    let itemsCarosello: CaroselloItem[] = servizi.map(s => {
        return {
            id: s.id,
            imgUrl: s.imgUrl,
            nome: s.name,
            descrizione: s.description,
            tipo: 'servizio'
        }
    })

    return (
        <div className="container m-auto flex flex-col py-6">
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-16"
                     data-aos="zoom-in"
                     data-aos-duration="1000"
                     data-aos-once="true"
                >
                    <div className="p-6 rounded-2xl bg-[#e1edff] hidden lg:flex">
                        <div className="flex flex-col">
                            <h2 className="text-2xl xl:text-[25px] mb-5 text-primary">Tutti i Servizi</h2>
                            <ul className="ml-10">
                                {servizi.map(servizio => {
                                    return (
                                        <li key={servizio.id}
                                            className="text-base xl:text-[14px] mb-4">{servizio.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <Carosello data={itemsCarosello}/>
                </div>
                <div
                    className="flex flex-col w-full text-center items-center mt-20"
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    <h1 className="mb-2 text-secondary">Esperienza, empatia, fiducia</h1>
                    <hr className="border border-secondary w-[100px] mb-5"/>

                </div>
                <div className="grid md:grid-cols-3 py-20 gap-20">
                    <div className="flex flex-col items-center"
                         data-aos="zoom-in"
                         data-aos-duration="1000"
                         data-aos-once="true"
                    >
                        <div
                            className="w-[150px] h-[150px] shadow-2xl rounded-full bg-orange-400 flex justify-center items-center">
                            <CountUp end={100} duration={3}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span className="text-5xl text-white" ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <h2 className="mt-10 text-center">Pazienti trattati nel 2022</h2>
                    </div>

                    <div className="flex flex-col items-center"
                         data-aos="zoom-in"
                         data-aos-duration="1000"
                         data-aos-once="true"
                         data-aos-delay="250"
                    >
                        <div
                            className="w-[150px] h-[150px] shadow-2xl rounded-full bg-orange-400 flex justify-center items-center">
                            <CountUp end={8} duration={3}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span className="text-5xl text-white" ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <h2 className="mt-10 text-center">Terapie erogate</h2>
                    </div>
                    <div className="flex flex-col items-center"
                         data-aos="zoom-in"
                         data-aos-duration="1000"
                         data-aos-once="true"
                         data-aos-delay="250"
                    >
                        <div
                            className="w-[150px] h-[150px] shadow-2xl rounded-full bg-orange-400 flex justify-center items-center">
                            <CountUp end={4} duration={3}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span className="text-5xl text-white" ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <h2 className="mt-10 text-center">Membri del team</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}