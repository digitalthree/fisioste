import React from 'react';

interface ClinicaColonnaProps {
}

export const ClinicaColonna: React.FC<ClinicaColonnaProps> = ({}) => {
    return (
        <>
            <div>
                <h2 className="text-secondary text-[25px] mb-3">
                    Il nostro centro è specializzato nella CURA delle patologie della colonna vertebrale come:
                </h2>
                <ul className="list-disc px-10">
                    <li>Cervicalgia</li>
                    <li>Scoliosi</li>
                    <li>Ernia del disco</li>
                    <li>Alterazioni Posturali</li>
                    <li>Dolori muscolari, da artrosi, articolari</li>
                    <li>Nevralgie come sciatalgia e cervicobrachialgia</li>
                    <li>Patologie pre/post opertorie</li>
                    <li>Prevenzione</li>
                    <li>Disturbi dell’articolazione temporo-mandibolare</li>
                    <li>Mal di testa</li>
                </ul>
                <h2 className="text-secondary text-[25px] mt-3">A chi si rivolge?</h2>
                <p className="text-[18px] mb-4">I nostri trattamenti sono mirati per tutti i pazienti che soffrono di
                    tutte le patologie legate al “mal di schiena”, acuto e cronico.
                </p>
                <h2 className="text-secondary text-[25px] mt-3">Perchè affidarsi al nostro centro?</h2>
                <p className="text-[18px] mb-4">Grazie all’esperienza e la formazione continua, il nostro STAFF è in
                    grado di fornire, dopo valutazione, un programma riabilitativo individuale, utilizzando una metodica
                    altamente specializzata.
                    Per ogni patologia è possibile utilizzare approcci diversi sia mediante l’utilizzo di terapia fisica
                    all’avanguardia oppure mediante tecniche di terapia manuale, osteopatia, posturale individuale ed
                    esercizio terapeutico.
                    Il nostro approccio riabilitativo, basato sulle migliori evidenze scientifiche e pratica clinica,
                    garantisce il recupero precoce e la guarigione completa del paziente.
                </p>
            </div>
        </>
    )

}