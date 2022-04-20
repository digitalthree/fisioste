import React from 'react';

interface OndedurtoProps {
}

export const Ondedurto: React.FC<OndedurtoProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-4">
                Le onde d’urto sono delle onde acustiche che trasportano alta energia, trasmesse attraverso la
                superficie della pelle a diffuse radialmente nel corpo, nella zona del dolore.
            </p>
            <p className="text-[18px] mb-4">
                È uno dei pochi trattamenti che dimostra efficacia sulle calcificazioni e tendinopatie inserzionali
                croniche che spesso tendono a non guarire a causa di una scarsa vascolarizzazione della giunzione
                osteo-tendinea.
            </p>
            <p className="text-[18px] mb-4">
                Grazie all’energia fisica sprigionata è in grado di creare effetto biologico di NEOANGIOGENESI, cioè la
                creazione di nuovi vasi che raggiungono i tessuti da trattare e permettono il riassorbimento di depositi
                di calcio e il rilascio di tessuto fibroso.
            </p>
            <h2 className="text-secondary">Principali indicazioni</h2>
            <ul className="list-disc px-10">
                <li>Fascite plantare</li>
                <li>Contratture muscolari</li>
                <li>Tendinite</li>
                <li>Epicondilite</li>
                <li>Borsiti</li>
                <li>Tendiniti calcifiche della cuffia dei rotatori</li>
                <li>Tendinopatie</li>
                <li>Spina e sperone calcaneare</li>
                <li>Pubalgia</li>
                <li>Ritardo consolidazione ossea</li>
                <li>Calcificazioni muscolari</li>
            </ul>
        </>
    )

}