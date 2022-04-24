import React from 'react';

interface HeroContattiProps {
}

export const HeroContatti: React.FC<HeroContattiProps> = ({}) => {
    return (
        <>
            <div
                className="h-[48vh] lg:h-[40vh] bg-gradient-to-t from-white to-[#d8e8ff] hidden md:flex justify-start bg-no-repeat"
                style={{
                    backgroundImage: "url('/img/contatti/contact-banner.png')",
                    backgroundSize: "cover",
                }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">Entra in </span>Contatto <span
                        className="text-black">con noi</span></h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        A completa disposizione per rispondere alle tue domande e fornirti la soluzione migliore alle
                        tue esigenze.
                    </h2>
                </div>
            </div>


            <div className="h-[48vh] md:hidden lg:h-[55vh] p-2 flex justify-start bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/servizi/banners/mobile/Osteopatia.png')",
                     backgroundSize: "cover",
                 }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">Entra in </span>Contatto <span
                        className="text-black">con noi</span></h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        A completa disposizione per rispondere alle tue domande e fornirti la soluzione migliore alle
                        tue esigenze.
                    </h2>
                </div>
            </div>
        </>
    )

}