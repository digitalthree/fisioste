import React from 'react';

interface LaserTerapiaProps {
}

export const LaserTerapia: React.FC<LaserTerapiaProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-4">
                La laserterapia MLS (multiwawe Locked System) è una tecnica all’avanguardia, le cui caratteristiche di
                emissione sono state studiate per migliorare l’efficacia terapeutica del laser.
            </p>
            <p className="text-[18px] mb-4">
                L’impulso MLS è generato da un sofisticato sistema ad emissione continua e pulsata, sincronizzata e
                combinata, di due sorgenti con differenze lunghezze d’onda in grado di giungere in profondità nei
                tessuti. Grazie alla sinergie di questi impulsi, si hanno effetti terapeutici antiinfiammatori,
                antiedemigeni, analgesici e biostimolanti.
            </p>
            <h2 className="text-secondary">
                Indicazioni teraupetiche
            </h2>
            <ul className="list-disc px-10">
                <li>Artriti</li>
                <li>Artrosi</li>
                <li>Borsiti</li>
                <li>Cervico Brachialgie</li>
                <li>Distorsioni</li>
                <li>Dolori articolari</li>
                <li>Dolori di spalla</li>
                <li>Edemi</li>
                <li>Ematomi</li>
                <li>Esiti di traumi</li>
                <li>Fasciti plantari</li>
                <li>Lombalgie</li>
                <li>Piaghe</li>
                <li>Strappi</li>
                <li>Tendiniti</li>
                <li>Ulcere</li>
            </ul>
        </>
    )

}