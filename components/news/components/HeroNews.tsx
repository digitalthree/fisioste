import React from 'react';

interface HeroNewsProps {
}

export const HeroNews: React.FC<HeroNewsProps> = ({}) => {
    return(
        <>
            <div
                className="h-[30vh] bg-gradient-to-t from-white to-[#d8e8ff] flex justify-start"
                /*style={{
                    backgroundImage: "url('/img/news/banner.png')",
                    backgroundSize: "cover",
                }}*/
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">I Nostri </span>Articoli</h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                </div>
            </div>


            {/*<div className="h-[48vh] md:hidden lg:h-[55vh] p-2 flex justify-start bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/servizi/banners/mobile/TerapieFisiche.png')",
                     backgroundSize: "cover",
                 }}
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">I Nostri </span>Articoli</h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                </div>
            </div>*/}
        </>
    )

}