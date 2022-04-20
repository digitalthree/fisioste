import React from 'react';

import {DesktopMenu} from "./DesktopMenu";
import {MobileMenu} from "./MobileMenu";

interface NavbarProps {
}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    return(
        <>
            <DesktopMenu/>
            <MobileMenu/>
        </>
    )
}