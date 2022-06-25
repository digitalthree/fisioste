import React from 'react';
import {Tecar} from "./Tecar";
import {Fisioestetica} from "./Fisioestetica";
import {Ondedurto} from "./Ondedurto";
import {TerapiaManuale} from "./TerapiaManuale";
import {FEG} from "./FEG";
import {Osteopatia} from "./Osteopatia";
import {LaserTerapia} from "./LaserTerapia";
import {RiabilitazionePosturale} from "./RiabilitazionePosturale";
import {TerapieFisiche} from "./TerapieFisiche";
import {ClinicaColonna} from "./ClinicaColonna";

interface FactoryServiziProps {
    servizio: string
}

export const FactoryServizi: React.FC<FactoryServiziProps> = ({servizio}) => {

    switch (servizio) {
        case 'Tecar Terapia':
            return <Tecar/>
        case 'Fisioestetica':
            return <Fisioestetica/>
        case "Onde d'urto":
            return <Ondedurto/>
        case "Terapia Manuale":
            return <TerapiaManuale/>
        case "FEG":
            return <FEG/>
        case "Osteopatia":
            return <Osteopatia/>
        case "Laser Terapia":
            return <LaserTerapia/>
        case "Rieducazione Posturale":
            return <RiabilitazionePosturale/>
        case "Terapie Fisiche":
            return <TerapieFisiche/>
        case "Clinica Della Colonna":
            return <ClinicaColonna/>
        default:
            return <></>
    }

}