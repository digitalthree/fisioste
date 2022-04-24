import React from 'react';

import Image from 'next/image'
import {FooterBanner} from "./FooterBanner";
import Link from "next/link";
import {FooterMenu} from "./FooterMenu";

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div>
            <div className="bg-gradient-to-t from-white to-[#d8e8ff] py-12">
                <FooterBanner/>
                <div className="flex container m-auto justify-center">
                    <div className="flex-col text-center sm:flex sm:items-center sm:flex-row sm:justify-between w-full">

                        <FooterMenu/>

                        <div className="grid grid-cols-2 mt-10 lg:mt-0 md:grid-cols-4 gap-4">
                            <div>
                                <Image src={'/img/smartphone1.webp'} width="100px" height="100px" layout="fixed"
                                       alt="Fisioste smartphone"/>
                                <div className="flex flex-col">
                                    <a href="tel:+39 3288349050" className="text-secondary mt-4 ml-4 text-base xl:text-[20px] font-light hover:cursor-pointer hover:underline">+39 3288349050 </a>
                                </div>
                            </div>
                            <div>
                                <Image src={'/img/pc_email.png'} width="100px" height="100px" layout="fixed"
                                       alt="Fisioste smartphone"/>
                                <div className="flex flex-col">
                                    <a href="mailto:info@fisioste.it" className="text-secondary mt-4 ml-4 text-base xl:text-[20px] font-light hover:cursor-pointer hover:underline">info@fisioste.it</a>
                                </div>
                            </div>
                            <div>
                                <Image src={'/img/pin1.png'} width="100px" height="100px" layout="fixed"
                                       alt="Fisioste pin"/>
                                <div className="flex flex-col">
                                    <a className="text-secondary mt-4 ml-4 text-base xl:text-[20px] font-light hover:underline" rel="noreferrer"
                                       target="_blank" href="https://g.page/Fisioste?share">Viale della Resistenza,<br/> 29
                                        64100 Teramo</a>
                                </div>
                            </div>
                            <div>
                                <Image src={'/img/clock1.png'} width="100px" height="100px" layout="fixed"
                                       alt="Fisioste pin"/>
                                <div className="flex flex-col">
                                    <span className="text-secondary mt-4 ml-4 text-base xl:text-[20px] font-light"
                                    >
                                        Lun-Ven / 9:00 - 19:00
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-[#283f92] py-8 pb-24 md:py-8">
                <div className="container m-auto">
                    <div className="flex-col sm:flex sm:flex-row sm:justify-between text-center">
                        <p className="text-base sm:text-xl mb-2 text-white">Tutti i diritti riservati - <span className="font-bold">FisioSte.it</span></p><br/>
                        <p className="text-base sm:text-xl mb-2 text-white">P.Iva: <span className="font-bold">IT01750720672</span><br/></p>
                        <p className="text-base sm:text-xl mb-2 text-white">Web Design: <a className="font-bold hover:cursor-pointer hover:underline" href="https://digital-three.com" target="_blank" rel="noreferrer">digital-three.com</a><br/></p>

                        <p className="text-base sm:text-xl mb-2 text-white">
                            <Link href="/cookie_policy">
                                <span className="mr-1 hover:cursor-pointer hover:underline">Cookie Policy</span>
                            </Link>
                            -
                            <Link href="/privacy_policy">
                                <span className="ml-1 hover:cursor-pointer hover:underline">Privacy Policy</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}