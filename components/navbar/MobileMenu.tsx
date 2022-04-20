import React from 'react';
import Link from "next/link";
import {FaClipboardList, FaInfoCircle, FaNewspaper, FaPhoneVolume} from "react-icons/fa";
import Image from "next/image";

interface MobileMenuProps {
}

export const MobileMenu: React.FC<MobileMenuProps> = ({}) => {
    return(
        <div className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white py-1 z-[100]">
            <div className="flex px-2 items-center justify-around">
                <Link href="/chiSiamo">
                    <div className="flex flex-col items-center">
                        <FaInfoCircle size="25px" color="#5972b4"/>
                        <span>Chi siamo</span>
                    </div>
                </Link>
                <Link href="/servizi">
                    <div className="flex flex-col items-center ">
                        <FaClipboardList size="25px" color="#5972b4"/>
                        <span>Servizi</span>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex flex-col items-center rounded-full bg-[#e1edff] relative top-[-25px]">
                        <Image src={'/img/Fisioste_Logo.webp'} width="50px" height="50px" layout="intrinsic" alt="Fisioste Logo"/>
                    </div>
                </Link>
                <Link href="/news">
                    <div className="flex flex-col items-center ">
                        <FaNewspaper size="25px" color="#5972b4"/>
                        <span>News</span>
                    </div>
                </Link>
                <Link href="/contatti">
                    <div className="flex flex-col items-center">
                        <FaPhoneVolume size="25px" color="#5972b4"/>
                        <span>Contatti</span>
                    </div>
                </Link>
            </div>
        </div>
    )

}