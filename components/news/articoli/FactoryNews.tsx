import React from 'react';
import {CampiElettromagnetici} from "./CampiElettromagnetici";
import {AntiAging} from "./AntiAging";
import {DoloreAllaSpalla} from "./DoloreAllaSpalla";
import {Tendinopatie} from "./Tendinopatie";
import {GinnasticaIpopressiva} from "./GinnasticaIpopressiva";
import {RiabilitazionePavimentoPelvico} from "./RiabilitazionePavimentoPelvico";
import {FisioterapiaDonna} from "./FisioterapiaDonna";
import {Endometriosi} from "./Endometriosi";
import DitoAScatto from "./DitoAScatto";
import EsercizioTerapeutico from "./EsercizioTerapeutico";
import MalDiTesta from "./MalDiTesta";
import Linfedema from "./Linfedema";
import Tallonite from "./Tallonite";
import Borsite from "./Borsite";
import FisioterapiaEsteticaDermatofunzionale from "./FisioterapiaEsteticaDermatofunzionale";
import SindromeDelPiriforme from "./SindromeDelPiriforme";
import Linfodrenaggio from "./Linfodrenaggio";
import VertiginiCervicale from "./VertiginiCervicale";
import ErniaLombare from "./ErniaLombare";
import ColpoDellaStrega from "./ColpoDellaStrega";
import Fibromialgia from "./Fibromialgia";

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
        case 8:
            return <Endometriosi/>
        case 9:
            return <DitoAScatto/>
        case 10:
            return <EsercizioTerapeutico/>
        case 11:
            return <MalDiTesta/>
        case 12:
            return <Linfedema/>
        case 13:
            return <Tallonite/>
        case 14:
            return <Borsite/>
        case 15:
            return <FisioterapiaEsteticaDermatofunzionale/>
        case 16:
            return <SindromeDelPiriforme/>
        case 17:
            return <Linfodrenaggio/>
        case 18:
            return <VertiginiCervicale/>
        case 19:
            return <ErniaLombare/>
        case 20:
            return <ColpoDellaStrega/>
        case 21:
            return <Fibromialgia/>
        default:
            return <></>
    }
}