import React from 'react';
import Image from "next/image";

interface FooterContattiProps {
}

export const FooterContatti: React.FC<FooterContattiProps> = ({}) => {
    return(
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
                       target="_blank" href="https://g.page/Fisioste?share">Viale della Resistenza,<br/> 29/a
                        64100 Teramo</a>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Image src={'/img/clock1.png'} width="50px" height="50px" layout="fixed"
                       alt="Fisioste pin"/>
                <div className="flex flex-col">
                                    <span className="text-secondary mt-4 ml-4 text-sm text-center lg:text-base font-light"
                                    >
                                        Lun-Ven / 9:00 - 20:00
                                    </span>
                </div>
            </div>
        </div>
    )

}