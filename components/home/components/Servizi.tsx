import React, {useEffect, useState} from 'react';
import {Carousel} from "react-responsive-carousel";
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from "react-icons/fa";
import {Servizio} from "../../../pages/api/servizi";
import {Carosello, CaroselloItem} from "../../shared/Carosello";

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
        <div className="container m-auto flex flex-col justify-start py-6">
            <div className="flex flex-col w-full lg:w-2/3 text-center lg:text-left items-center lg:items-start"
                 data-aos="zoom-out"
                 data-aos-duration="1000"
                 data-aos-once="true"
            >
                <h1 className="mb-2 text-secondary">Esperienza, empatia, fiducia</h1>
                <hr className="border border-secondary w-[100px] mb-5"/>
                <h2>
                    Scegliere i migliori professionisti per la cura di se stessi è difficile, ma non impossibile se le
                    conoscenze tecniche diventato un tutt’uno con passione, empatia e attenzione al paziente.
                </h2>
            </div>
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
            </div>
        </div>
    )

}