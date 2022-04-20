import React from 'react';
import {CampiElettromagnetici} from "./CampiElettromagnetici";
import {AntiAging} from "./AntiAging";
import {DoloreAllaSpalla} from "./DoloreAllaSpalla";
import {Tendinopatie} from "./Tendinopatie";

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
        default:
            return <></>
    }
}