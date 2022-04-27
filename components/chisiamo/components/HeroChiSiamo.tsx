import React from 'react';

interface HeroChiSiamoProps {
}

export const HeroChiSiamo: React.FC<HeroChiSiamoProps> = ({}) => {
    return (
        <>
            <div
                className="flex justify-start pt-10"
                /*style={{
                    backgroundImage: "url('/img/chisiamo/team_banner.png')",
                    backgroundSize: "cover",
                }}*/
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                <div className="container m-auto">
                    <h1 className="text-secondary">
                        <span className="text-black">Il </span>
                        Team
                        <span className="text-black"> di professionisti </span>
                    </h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        Coinvolgere attivamente i pazienti nel percorso riabilitativo e rieducativo è uno dei nostri
                        obiettivi principali.
                        <br/>
                        Il costante aggiornamento del Team di specialisti altamente qualificato e abilitato
                        all’esercizio della professione; garantisce al paziente un benessere fisico immediato.
                    </h2>
                </div>
            </div>
        </>
    )

}