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
                <div className="flex container m-auto justify-center ">
                    <div className="grid lg:grid-cols-3 gap-4 w-full pt-14">
                        <FooterMenu/>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                            <div className="flex flex-col items-center">
                                <Image src={'/img/smartphone1.webp'} width="50px" height="50px" layout="fixed"
                                       alt="Fisioste smartphone"/>
                                <div className="flex flex-col">
                                    <a href="tel:+39 3288349050" className="text-secondary mt-4 ml-4 text-sm text-center lg:text-base font-light hover:cursor-pointer hover:underline">+39 3288349050 </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image src={'/img/pc_email.png'} width="50px" height="50px" layout="fixed"
                                       alt="Fisioste smartphone"/>
                                <div className="flex flex-col">
                                    <a href="mailto:info@fisioste.it" className="text-secondary mt-4 ml-4 text-sm text-center lg:text-base font-light hover:cursor-pointer hover:underline">info@fisioste.it</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image src={'/img/pin1.png'} width="50px" height="50px" layout="fixed"
                                       alt="Fisioste pin"/>
                                <div className="flex flex-col">
                                    <a className="text-secondary mt-4 ml-4 text-sm text-center lg:text-base font-light hover:underline" rel="noreferrer"
                                       target="_blank" href="https://g.page/Fisioste?share">Viale della Resistenza,<br/> 29
                                        64100 Teramo</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image src={'/img/clock1.png'} width="50px" height="50px" layout="fixed"
                                       alt="Fisioste pin"/>
                                <div className="flex flex-col">
                                    <span className="text-secondary mt-4 ml-4 text-sm text-center lg:text-base font-light"
                                    >
                                        Lun-Ven / 9:00 - 19:00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-center justify-center items-center pt-6 pb-12 md:pb-0 md:pt-6 lg:pt-0 lg:border-l border-secondary">
                            <p className="text-base mb-2 text-secondary">Tutti i diritti riservati - <span className="font-bold">FisioSte.it</span></p>
                            <p className="text-base mb-2 text-secondary">P.Iva: <span className="font-bold">IT01750720672</span><br/></p>
                            <p className="text-base mb-2 text-secondary">Web Design: <a className="font-bold hover:cursor-pointer hover:underline" href="https://digital-three.com" target="_blank" rel="noreferrer">digital-three.com</a><br/></p>

                            <p className="text-base mb-2 text-secondary">
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
        </div>
    )

}