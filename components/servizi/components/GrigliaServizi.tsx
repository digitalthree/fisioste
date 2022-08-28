import React from 'react';
import {Servizio} from "../../../pages/api/servizi";
import Link from "next/link";

interface GrigliaServiziProps {
    servizi: Servizio[]
}

export const GrigliaServizi: React.FC<GrigliaServiziProps> = ({servizi}) => {
    return(
        <>
            <div className="container pb-20 md:pt-10 m-auto grid lg:grid-cols-3 gap-16">
                {servizi.filter(s => s.description !== '').map(servizio => {
                    return(
                        <Link key={servizio.id} href={`/servizi/${servizio.id}`}>
                            <div className="h-full bg-[#e1edff] rounded-2xl shadow-xl hover:scale-105 hover:duration-700 duration-700">
                                <div className="flex flex-col items-start text-left h-full">
                                    <div className="rounded-t-3xl w-full p-20 md:p-44 lg:p-28 mb-4"
                                         style={{
                                             backgroundImage: `url(${servizio.imgUrl})`,
                                             backgroundSize: '100%',
                                             backgroundPositionY: (servizio.id !== 5) ? "-120px" : "0px",
                                             backgroundRepeat: "no-repeat"
                                         }}
                                    />
                                    <div className="px-4 py-4">
                                        <h2 className="text-3xl font-light">{servizio.name}</h2>
                                        <hr className="border border-primary w-[100px] mt-4"/>
                                        <div className="mt-4">
                                            <p className="text-start">
                                                {(servizio.description.length > 180) ? servizio.description.substring(0, 180) + '...' : servizio.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>

                    )
                })}
            </div>
        </>
    )

}