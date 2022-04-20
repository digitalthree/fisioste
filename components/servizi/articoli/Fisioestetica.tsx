import React from 'react';

interface FisioesteticaProps {
}

export const Fisioestetica: React.FC<FisioesteticaProps> = ({}) => {
    return (
        <>
            <p className="text-[18px]">
                La Fisioestetica è una nuova specializzazione della Fisioterapia che ha come scopo quello di utilizzare
                apparecchiature medicali e principi di terapia manuale che permettono il miglioramento delle condizioni
                fisiologiche naturali della persona provocando una stimolazione dei tessuti e il ripristino della
                funzione. I risultati di questi trattamenti sono di miglioramento dello stato di benessere generale
                della persona e del conseguente aspetto fisico.
            </p>
            <div>
                <h1 className="text-secondary">Risultati</h1>
                <p className="text-[18px]">
                    Con la Fisioestetica è possibile raggiungere risultati evidenti nel trattamento di:
                </p>
                <ul className="list-disc px-10">
                    <li>Cellulite</li>
                    <li>Smagliature</li>
                    <li>Rimodellamento del corpo</li>
                    <li>Gambe pesanti</li>
                </ul>
                <p className="text-[18px]">
                    Dopo valutazione si effettuano trattamenti mirati in base alla patologia e all’obiettivo che si
                    vuole raggiungere.
                    I risultati sono immediati e visibile già dalla prima seduta.
                </p>
                <h2 className="text-secondary mt-3">Cos’è l’Onda Acustica?</h2>
                <p className="text-[18px] mb-4">L’onda acustica ad alta energia generata da un’onda sonora indotta da un
                    generatore di tipo balistico.
                </p>
                <p className="text-[18px] mb-4">
                    Il trattamento utilizza onde acustiche ad alta energia che vengono introdotte nel corpo del paziente
                    sotto forma di oscillazioni ad alta frequenza, permettendo una terapia efficace e duratura contro la
                    cellulite (PEFS) di stadio I, II e III e non solo.
                </p>
                <p className="text-[18px]">
                    Il trattamento è praticabile in ogni periodo dell’anno, si consiglia di bere molta acqua per
                    favorire maggiormente i processi depuratori dell’organismo stimolati dal trattamento. I primi
                    risultati sono visibili già dalla prima seduta.
                </p>
                <h2 className="text-secondary mt-3">Benefici</h2>
                <ul className="list-disc px-10">
                    <li>Stimolazione della circolazione sanguigna e linfatica</li>
                    <li>Innalzamento del calore tissutale e attivazione del meccanismo di eliminazione delle cellule
                        adipose
                    </li>
                    <li>Attivazione del metabolismo</li>
                    <li>Stimolazione della produzione di collagene, miglioramento dell’elasticità e texture della
                        pelle
                    </li>
                </ul>
                <h2 className="text-secondary mt-3">Effetti</h2>
                <ul className="list-disc px-10">
                    <li>Rimodellamento del corpo</li>
                    <li>Trattamento cellulite (I-II-III stadio)</li>
                    <li>Rassodamento dei tessuti</li>
                    <li>Spianamento di cicatrici</li>
                    <li>Miglioramento dell’elasticità cutanea</li>
                    <li>Trattamento di smagliature da gravidanza</li>
                    <li>Riduzione della circonferenza</li>
                </ul>
                <h2 className="text-secondary mt-3">HUMAN TECAR PHYSIO TT</h2>
                <p className="text-[18px] mb-4">La Physio TT, è uno stimolatore della microcircolazione che utilizza una
                    tecnologia inserita in speciali fasce termiche, la cui funzione è di modulare fisiologicamente il
                    microclima su determinate aree del corpo.
                </p>
                <p className="text-[18px] mb-4">
                    Agisce sulla trasformazione dei grassi, nel recupero muscolare e nelle riduzioni di adipe in eccesso
                    localizzato.
                </p>
                <p className="text-[18px] mb-4">
                    Attiva i processi enzimatici che trasformano i trigliceridi in acidi grassi e glicerolo, permettendo
                    al corpo di consumare più rapidamente le riserve disponibili, con conseguente effetto di
                    dimagrimento localizzato.
                </p>
                <p className="text-[18px] mb-4">
                    Il FISIOTERAPISTA SPECIALIZZATO IN FISIOESTETICA O FISIOTERAPIA DERMATOFUNZIONALE è in grado di
                    utilizzare le metodiche e i mezzi fisici fisioterapici per migliorare l’aspetto e la funzionalità
                    dei tessuti interessati.
                </p>
            </div>
        </>
    )

}