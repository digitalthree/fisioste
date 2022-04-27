import React from 'react';
import Link from "next/link";

interface FooterMenuProps {
}

export const FooterMenu: React.FC<FooterMenuProps> = ({}) => {
    return (
        <div className="hidden lg:flex lg:flex-col lg:items-center sm:border-r border-secondary">
            <h2 className="text-[35px] text-secondary font-normal">Menu</h2>
            <div className="flex flex-col">
                <Link href="/">
                    <span
                        className="text-primary text-center font-normal hover:cursor-pointer hover:text-secondary text-base uppercase">
                        Home
                    </span>
                </Link>
                <Link href="/chiSiamo">
                    <span
                        className="text-primary text-center font-normal hover:cursor-pointer hover:text-secondary text-base uppercase">
                        Chi siamo
                    </span>
                </Link>
                <Link href="/servizi">
                    <span
                        className="text-primary text-center font-normal hover:cursor-pointer hover:text-secondary text-base uppercase">
                        Servizi
                    </span>
                </Link>
                <Link href="/news">
                    <span
                        className="text-primary text-center font-normal hover:cursor-pointer hover:text-secondary text-base uppercase">
                        News
                    </span>
                </Link>
                <Link href="/contatti">
                    <span
                        className="text-primary text-center font-normal hover:cursor-pointer hover:text-secondary text-base uppercase">
                        Contatti
                    </span>
                </Link>
            </div>
        </div>
    )

}