import React from 'react';

interface HeroServiziProps {
}

export const HeroServizi: React.FC<HeroServiziProps> = ({}) => {
    return (
        <>
            <div className="h-[40vh] bg-gradient-to-t from-white to-[#d9e8ff] flex justify-start">
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">I Nostri </span>Servizi</h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        Scegliere i migliori professionisti per la cura di se stessi è difficile, ma non impossibile se
                        le conoscenze tecniche diventato un tutt’uno con passione, empatia e attenzione al paziente.
                    </h2>
                </div>
            </div>

        </>
    )

}