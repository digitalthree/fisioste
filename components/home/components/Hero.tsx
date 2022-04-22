import React from 'react';
import Image from "next/image";
import Link from 'next/link'

interface HeroProps {
}

export const Hero: React.FC<HeroProps> = ({}) => {
    return(
        <>
            <div className="h-[48vh] lg:h-[55vh] bg-[#EFEFEF] p-2 hidden lg:flex justify-start bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/home/hero.jpg')",
                     backgroundPositionX: "60%",
                     backgroundSize: 'auto'
                 }}
            >
                <div className="container my-52 lg:m-auto hidden lg:flex">
                    <div className="flex flex-col my-auto w-fit rounded-2xl bg-[#e1edff] p-6 shadow-xl opacity-60"
                         data-aos="flip-right"
                         data-aos-duration="1000"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/Fiosioste_Font.webp'} width="200px" height="47px" layout="fixed" alt="Fisioste Logo"/>
                        <hr className="border border-gray-600 w-[100px] mt-6"/>
                        <p className="mt-6 font-light text-xl">Un team di esperti al <span className="text-secondary">vostro servizio</span></p>
                        <div className="flex flex-col mt-6">
                            <Link href="/chiSiamo">
                                <button className='px-8 py-3 rounded-full w-full mb-4 bg-primary text-white sm:mr-7 hover:opacity-80'>SCOPRI DI PIU</button>
                            </Link>
                            <Link href="/servizi">
                                <button className='px-5 py-3 rounded-full w-full border border-secondary text-secondary hover:opacity-60'>I NOSTRI SERVIZI</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="h-[48vh] bg-[#EFEFEF] p-2 hidden sm:flex lg:hidden justify-start"
                 style={{
                     backgroundImage: "url('/img/home/hero_tablet.jpg')",
                     backgroundSize: 'cover'
                 }}
            >
                <div className="container my-52 lg:m-auto">
                    <div className="flex flex-col my-auto w-fit rounded-2xl bg-[#e1edff] p-6 shadow-xl opacity-60"
                         data-aos="flip-right"
                         data-aos-duration="1000"
                         data-aos-once="true"
                    >
                        <Image src={'/img/home/Fiosioste_Font.webp'} width="200px" height="47px" layout="fixed" alt="Fisioste Logo"/>
                        <hr className="border border-gray-600 w-[100px] mt-6"/>
                        <p className="mt-6 font-light text-xl">Un team di esperti al <span className="text-secondary">vostro servizio</span></p>
                        <div className="flex flex-col mt-6">
                            <Link href="/chiSiamo">
                                <button className='px-8 py-3 rounded-full w-full mb-4 bg-primary text-white sm:mr-7 hover:opacity-80'>SCOPRI DI PIU</button>
                            </Link>
                            <Link href="/servizi">
                                <button className='px-5 py-3 rounded-full w-full border border-secondary text-secondary hover:opacity-60'>I NOSTRI SERVIZI</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="h-[48vh] relative sm:hidden lg:h-[55vh] bg-[#EFEFEF] p-2 flex justify-center bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/home/hero_mobile.jpg')",
                     backgroundSize: 'cover'
                 }}
            >
                <div className="md:hidden absolute bottom-[-20px]">
                    <div className="flex flex-col m-auto w-fit rounded-2xl bg-[#e1edff] p-6 shadow-xl opacity-80">
                        <Image src={'/img/home/Fiosioste_Font.webp'} width="277px" height="62px" layout="fixed"
                               alt="Fisioste Logo"/>
                        <hr className="border border-gray-600 w-[100px] mt-6"/>
                        <p className="mt-6 font-light text-xl">Un team di esperti al <span className="text-secondary">vostro servizio</span></p>
                    </div>
                </div>

            </div>
        </>

    )

}