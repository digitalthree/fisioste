import React from 'react';
import Link from "next/link";

interface FooterInfoProps {
}

export const FooterInfo: React.FC<FooterInfoProps> = ({}) => {
    return(
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
    )

}