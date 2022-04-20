import React from 'react';

interface FEGProps {
}

export const FEG: React.FC<FEGProps> = ({}) => {
    return (
        <>
            <h2 className="text-secondary">
                Fisioterapia Eco-Guidata
            </h2>
            <p className="text-[18px] mb-4">
                La Fisioterapia Ecoguidata rappresenta l’evoluzione nella pratica clinica del fisioterapista. Prevede
                l’utilizzo dell’ecografo durante la visita fisioterapica e nella successiva fase terapeutico-riabilitativa,
                nell’ambito delle diverse patologie e disfunzioni neuro-muscoloscheletriche e viscerali.
            </p>
            <p className="text-[18px]">
                L’ecografia ha il vantaggio di guardare “real time” e in dinamica le strutture anatomiche esaminate,
                caratteristica fondamentale per il fisioterapista in quanto esperto della funzione. La Fisioterapia
                Ecoguidata migliora l’immagine del professionista e rafforza l’alleanza terapeutica con il paziente.
            </p>
        </>

    )

}