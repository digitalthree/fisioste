import React, {FC} from 'react';
import {Hero} from "./components/Hero";
import {PrenotaAppuntamento} from "./components/prenotaAppuntamento/PrenotaAppuntamento";
import {SpecialistiBenessere} from "./components/SpecialistiBenessere";
import {Servizi} from "./components/Servizi";
import {Servizio} from "../../pages/api/servizi";
import {LeNostreConvenzioni} from "./components/LeNostreConvenzioni";
import {DiconoDiNoi} from "./components/DiconoDiNoi";
import {Newsletter} from "./components/Newsletter";

interface HomePageProps {
    servizi: Servizio[]
}

export const HomePage: FC<HomePageProps> = ({servizi}) => {

    return (
        <>
            <Hero/>
            <PrenotaAppuntamento servizi={servizi}/>
            <SpecialistiBenessere/>
            <Servizi servizi={servizi}/>
            <LeNostreConvenzioni/>
            <DiconoDiNoi/>
            <Newsletter/>
        </>
    )

}