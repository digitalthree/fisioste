import React from 'react';
import Image from "next/image";

interface HeroProps {
}

export const Hero: React.FC<HeroProps> = ({}) => {
    return (
        <>
            <div className="h-[48vh] lg:h-[60vh] bg-[#EFEFEF] p-2 hidden lg:flex justify-start bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/home/hero.jpg')",
                     backgroundSize: 'cover'
                 }}
            >
                <div className="container justify-center mt-0 lg:mx-auto hidden lg:flex">
                    <h1 className="text-black font-light"
                        data-aos="fade-in"
                        data-aos-duration="3000"
                        data-aos-once="true"
                    >Un team di esperti <span className="text-secondary">per te!</span></h1>
                </div>

            </div>

            <div className="h-[48vh] bg-[#EFEFEF] p-2 hidden sm:flex lg:hidden justify-start"
                 style={{
                     backgroundImage: "url('/img/home/hero_tablet.jpg')",
                     backgroundSize: 'cover'
                 }}
            >
                <div className="container mx-auto text-center">
                    <h1 className="text-black font-light"
                        data-aos="fade-in"
                        data-aos-duration="3000"
                        data-aos-once="true"
                    >
                        Un team di esperti <span className="text-secondary">per te!</span>
                    </h1>
                </div>

            </div>

            <div
                className="h-[48vh] relative sm:hidden lg:h-[55vh] bg-[#EFEFEF] p-2 flex justify-center bg-no-repeat bg-auto"
                style={{
                    backgroundImage: "url('/img/home/hero_mobile.jpg')",
                    backgroundSize: 'cover'
                }}
            >
                <div className="md:hidden absolute bottom-[-20px]">
                    <div className="flex flex-col items-center m-auto w-fit rounded-2xl bg-[#e1edff] p-6 shadow-xl opacity-80">
                        <Image src={'/img/home/Fiosioste_Font.webp'} width="277px" height="62px" layout="fixed"
                               alt="Fisioste Logo"/>
                        <hr className="border border-gray-600 w-[100px] mt-6"/>
                        <p className="mt-6 font-light text-xl">Un team di esperti <span className="text-secondary">per te!</span>
                        </p>
                    </div>
                </div>

            </div>
        </>

    )

}