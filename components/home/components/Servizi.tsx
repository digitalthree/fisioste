import React, {useState} from 'react';
import {Servizio} from "../../../pages/api/servizi";
import {Carosello, CaroselloItem} from "../../shared/Carosello";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from "react-countup";

interface ServiziProps {
    servizi: Servizio[]
}

export const Servizi: React.FC<ServiziProps> = ({servizi}) => {

    let itemsCarosello: CaroselloItem[] = servizi.filter(s => s.description !== '').map(s => {
        return {
            id: s.id,
            imgUrl: s.imgUrl,
            nome: s.name,
            descrizione: s.description,
            tipo: 'servizio'
        }
    })

    const [counterActive, setCounterActive] = useState(true);
    const [visitedCount, setVisitedCount] = useState(0);
    const [visitedCount2, setVisitedCount2] = useState(0);
    const [visitedCount3, setVisitedCount3] = useState(0);

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
                            <h2 className="text-2xl xl:text-[25px] mb-2 text-primary">Tutti i Servizi</h2>
                            <ul className="ml-5">
                                {servizi.map(servizio => {
                                    return (
                                        <li key={servizio.id}
                                            className="text-base xl:text-[14px] mb-2">{servizio.name}</li>
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
                            <CountUp end={1250} duration={3}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={() => {
                                        setVisitedCount(visitedCount + 1)
                                        if(visitedCount === 1){
                                            start()
                                        }
                                        if(visitedCount === 2){
                                            setCounterActive(false)
                                        }
                                    }} delayedCall active={counterActive}>
                                        <span className="text-5xl text-white" ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <h2 className="mt-10 text-center">Prestazioni erogate</h2>
                    </div>

                    <div className="flex flex-col items-center"
                         data-aos="zoom-in"
                         data-aos-duration="1000"
                         data-aos-once="true"
                         data-aos-delay="250"
                    >
                        <div
                            className="w-[150px] h-[150px] shadow-2xl rounded-full bg-orange-400 flex justify-center items-center">
                            <CountUp end={150} duration={3}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={() => {
                                        setVisitedCount2(visitedCount2 + 1)
                                        if(visitedCount2 === 1){
                                            start()
                                        }
                                        if(visitedCount2 === 2){
                                            setCounterActive(false)
                                        }
                                    }} delayedCall active={counterActive}>
                                        <span className="text-5xl text-white" ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <h2 className="mt-10 text-center">Nuovi pazienti</h2>
                    </div>
                    <div className="flex flex-col items-center"
                         data-aos="zoom-in"
                         data-aos-duration="1000"
                         data-aos-once="true"
                         data-aos-delay="250"
                    >
                        <div
                            className="w-[150px] h-[150px] shadow-2xl rounded-full bg-orange-400 flex justify-center items-center">
                            <CountUp end={5} duration={3}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={() => {
                                        setVisitedCount3(visitedCount3 + 1)
                                        if(visitedCount3 === 1){
                                            start()
                                        }
                                        if(visitedCount3 === 2){
                                            setCounterActive(false)
                                        }
                                    }} delayedCall active={counterActive}>
                                        <span className="text-5xl text-white" ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <h2 className="mt-10 text-center">Dipendenti</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}