import React from 'react';
import {CampiElettromagnetici} from "./CampiElettromagnetici";
import {AntiAging} from "./AntiAging";
import {DoloreAllaSpalla} from "./DoloreAllaSpalla";
import {Tendinopatie} from "./Tendinopatie";
import {GinnasticaIpopressiva} from "./GinnasticaIpopressiva";
import {RiabilitazionePavimentoPelvico} from "./RiabilitazionePavimentoPelvico";
import {FisioterapiaDonna} from "./FisioterapiaDonna";

interface FactoryNewsProps {
    idNews: number
}

export const FactoryNews: React.FC<FactoryNewsProps> = ({idNews}) => {
    switch (idNews) {
        case 1:
            return <CampiElettromagnetici/>
        case 2:
            return <AntiAging/>
        case 3:
            return <DoloreAllaSpalla/>
        case 4:
            return <Tendinopatie/>
        case 5:
            return <GinnasticaIpopressiva/>
        case 6:
            return <RiabilitazionePavimentoPelvico/>
        case 7:
            return <FisioterapiaDonna/>
        default:
            return <></>
    }
}