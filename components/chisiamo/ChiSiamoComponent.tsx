import React from 'react';
import Image from "next/image";
import {HeroChiSiamo} from "./components/HeroChiSiamo";
import {TeamCards} from "./components/TeamCards";
import {DiconoDiNoi} from "../home/components/DiconoDiNoi";
import {TeamMember} from "../../data/team";
import {LeNostreConvenzioni} from "../home/components/LeNostreConvenzioni";

interface ChiSiamoComponentProps {
    team: TeamMember[]
}

export const ChiSiamoComponent: React.FC<ChiSiamoComponentProps> = ({team}) => {
    return(
        <>
            <HeroChiSiamo/>
            <TeamCards team={team}/>
            <DiconoDiNoi/>
            <LeNostreConvenzioni/>
        </>

    )

}