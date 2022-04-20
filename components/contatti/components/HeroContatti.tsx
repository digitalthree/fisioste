import React from 'react';

interface HeroContattiProps {
}

export const HeroContatti: React.FC<HeroContattiProps> = ({}) => {
    return(
        <>
            <div className="h-[48vh] lg:h-[40vh] bg-gradient-to-t from-white to-[#d8e8ff] hidden md:flex justify-start bg-no-repeat"
                 style={{
                     backgroundImage: "url('/img/contatti/contact-banner.png')",
                     backgroundSize: "cover",
                     backgroundPositionY: "50%",
                     backgroundPositionX: '100px'
                 }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">Mettiti in </span>Contatto <span className="text-black">con noi</span></h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h2>
                </div>
            </div>


            <div className="h-[48vh] md:hidden lg:h-[55vh] p-2 flex justify-start bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/contatti/contact-banner.png')",
                     backgroundSize: "cover",
                     backgroundPositionX: "-150px"
                 }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">Mettiti in </span>Contatto <span className="text-black">con noi</span></h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h2>
                </div>
            </div>
        </>
    )

}