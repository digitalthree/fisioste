import React from 'react';

interface TerapieFisicheProps {
}

export const TerapieFisiche: React.FC<TerapieFisicheProps> = ({}) => {
    return (
        <>
            <h2 className="underline text-[25px]">Presso FISIOSTE è possibile eseguire le migliori terapie fisiche</h2>
            <p className="text-[18px] mb-2 mt-2"><span className="font-bold">Ultrasuono:</span> in campo terapeutico gli
                ultrasuoni sono ottenuti in modo artificiale sfruttando le proprietà di alcuni cristalli minerali
                sottoposti all’azione di un campo elettrico.
            </p>
            <p className="text-[18px] mb-2 ">L’irradiazione ultrasonica genera, quindi, un micro massaggio di notevole
                intensità, agendo in profondità nei tessuti. Da questa vibrazione, viene generato del calore, che genera
                effetto termico.
            </p>
            <p className="text-[18px] mb-2 "><span className="font-bold">Elettroterapia:</span> Il termine elettroterapia
                indica l’utilizzo a scopo terapeutico dell’energia elettrica in tutte le sue forme. Tra quelle
                utilizzate abbiamo a disposizione:
            </p>
            <ul className="list-disc px-10">
                <li>Elettrostimolazione</li>
                <li>Tens</li>
                <li>Ionoforesi</li>
                <li>Magnetoterapia</li>
            </ul>
        </>
    )

}