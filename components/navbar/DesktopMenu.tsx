import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";
import {useRouter} from "next/router";

interface DesktopMenuProps {
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({}) => {

    const [stickyClass, setStickyClass] = useState('relative');
    const router = useRouter()

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 300 ? setStickyClass('bg-white fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
    };

    return(
        <>
            <div className="w-full bg-white hidden md:block">
                <div className="container px-8 m-auto hidden lg:flex py-3 justify-between">
                    <Link href="/">
                        <div className="flex items-center hover:cursor-pointer">
                            <Image src={'/img/Fisioste_Logo.webp'} width="80px" height="80px" layout="intrinsic" alt="Fisioste Logo"/>
                            <Image src={'/img/home/Fiosioste_Font.webp'} width="200px" height="47px" layout="fixed" alt="Fisioste Logo"/>
                        </div>
                    </Link>
                    <div className="flex">
                        <div className="flex items-center mr-6">
                            <Image src={'/img/clock1.png'} width="50px" height="50px" layout="fixed" alt="Fisioste clock"/>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-xl lg:text-[16px] text-secondary font-medium">Orari</h3>
                                <p className="text-secondary text-[14px] font-light">Lun - Ven 9:00-19:00</p>
                            </div>
                        </div>

                        <div className="flex items-center mr-6">
                            <Image src={'/img/smartphone1.webp'} width="50px" height="50px" layout="fixed" alt="Fisioste smartphone"/>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-xl lg:text-[16px] text-secondary font-medium">Cellulare</h3>
                                <a href="tel:+393288349050" className="text-secondary text-[14px] font-light hover:cursor-pointer hover:underline">+39 3288349050 </a>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Image src={'/img/pin1.png'} width="50px" height="50px" layout="intrinsic" alt="Fisioste pin"/>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-xl lg:text-[16px] text-secondary font-medium">Vieni a trovarci</h3>
                                <a className="text-secondary text-[14px] font-light hover:underline" rel="noreferrer" target="_blank" href="https://g.page/Fisioste?share">Viale della Resistenza, 29 64100 Teramo</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`w-full border-2 border-gray-300 ${stickyClass}`}>
                    <div className="container m-auto flex items-center justify-between hidden md:flex">
                        <div className="py-4">
                            <Link href="/">
                                <span
                                    className="text-gray-500 font-normal hover:cursor-pointer hover:text-secondary text-[16px] mr-8 uppercase"
                                    style={{fontWeight: router.pathname === "/" ? 900 : 400, color: router.pathname === "/" ? '#264193' : ''}}
                                >Home</span>
                            </Link>
                            <Link href="/chiSiamo">
                                <span
                                    className="text-gray-500 font-normal hover:cursor-pointer hover:text-secondary text-[16px] mr-8 uppercase"
                                    style={{fontWeight: router.pathname === "/chiSiamo" ? 900 : 400, color: router.pathname === "/chiSiamo" ? '#264193' : ''}}
                                >Chi siamo</span>
                            </Link>
                            <Link href="/servizi">
                                <span
                                    className="text-gray-500 font-normal hover:cursor-pointer hover:text-secondary text-[16px] mr-8 uppercase"
                                    style={{fontWeight: router.pathname === "/servizi" ? 900 : 400, color: router.pathname === "/servizi" ? '#264193' : ''}}
                                >Servizi</span>
                            </Link>
                            <Link href="/news">
                                <span
                                    className="text-gray-500 font-normal hover:cursor-pointer hover:text-secondary text-[16px] mr-8 uppercase"
                                    style={{fontWeight: router.pathname === "/news" ? 900 : 400, color: router.pathname === "/news" ? '#264193' : ''}}
                                >News</span>
                            </Link>
                            <Link href="/contatti">
                                <span
                                    className="text-gray-500 font-normal hover:cursor-pointer hover:text-secondary text-[16px] mr-8 uppercase"
                                    style={{fontWeight: router.pathname === "/contatti" ? 900 : 400, color: router.pathname === "/contatti" ? '#264193' : ''}}
                                >Contatti</span>
                            </Link>
                        </div>

                        <div className="flex w-1/5 border-l-2 border-gray-300 py-4 pl-8 justify-end md:justify-between">
                            <a href="https://www.facebook.com/fisioste" target="_blank"rel="noreferrer">
                                <FaFacebookF size="20px" color="#283f92"
                                             className="hover:cursor-pointer hover:opacity-50"
                                />
                            </a>

                            <a href="https://www.instagram.com/fisioste/" target="_blank" rel="noreferrer">
                                <FaInstagram size="20px" color="#283f92" className="hover:cursor-pointer hover:opacity-50"/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCMDmGkclhs1CWlWe5G3ukbw/featured" target="_blank" rel="noreferrer">
                                <FaYoutube size="20px" color="#283f92" className="hover:cursor-pointer hover:opacity-50"/>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}