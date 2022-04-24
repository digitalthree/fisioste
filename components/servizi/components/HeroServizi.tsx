import React from 'react';

interface HeroServiziProps {
}

export const HeroServizi: React.FC<HeroServiziProps> = ({}) => {
    return (
        <>
            <div
                className="h-[48vh] lg:h-[40vh] bg-gradient-to-t from-white to-[#d8e8ff] hidden md:flex justify-start bg-no-repeat"
                style={{
                    backgroundImage: "url('/img/servizi/banner.png')",
                    backgroundSize: "cover",
                    backgroundPositionY: "50%",
                }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">I Nostri </span>Servizi</h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        Scegliere i migliori professionisti per la cura di se stessi è difficile, ma non impossibile se
                        le conoscenze tecniche diventato un tutt’uno con passione, empatia e attenzione al paziente.
                    </h2>
                </div>
            </div>


            <div className="h-[48vh] md:hidden lg:h-[55vh] p-2 flex justify-start bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/servizi/banner.png')",
                     backgroundSize: "cover",
                 }}
            >
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