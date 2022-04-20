import React from 'react';
import Link from "next/link";

interface FooterMenuProps {
}

export const FooterMenu: React.FC<FooterMenuProps> = ({}) => {
    return (
        <div className="hidden lg:flex lg:flex-col lg:mt-10 lg:mb-10 lg:pl-28">
            <h2 className="text-[35px] text-secondary font-normal">Menu</h2>
            <div className="flex flex-col">
                <Link href="/">
                    <span
                        className="text-primary font-normal hover:cursor-pointer hover:text-secondary text-base lg:text-xl uppercase">
                        Home
                    </span>
                </Link>
                <Link href="/chiSiamo">
                    <span
                        className="text-primary font-normal hover:cursor-pointer hover:text-secondary text-base lg:text-xl uppercase">
                        Chi siamo
                    </span>
                </Link>
                <Link href="/servizi">
                    <span
                        className="text-primary font-normal hover:cursor-pointer hover:text-secondary text-base lg:text-xl uppercase">
                        Servizi
                    </span>
                </Link>
                <Link href="/news">
                    <span
                        className="text-primary font-normal hover:cursor-pointer hover:text-secondary text-base lg:text-xl uppercase">
                        News
                    </span>
                </Link>
                <Link href="/contatti">
                    <span
                        className="text-primary font-normal hover:cursor-pointer hover:text-secondary text-base lg:text-xl uppercase">
                        Contatti
                    </span>
                </Link>
            </div>
        </div>
    )

}