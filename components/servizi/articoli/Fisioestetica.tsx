import React from 'react';

interface FisioesteticaProps {
}

export const Fisioestetica: React.FC<FisioesteticaProps> = ({}) => {
    return (
        <>
            <p className="text-[18px]">
                La fisioestetica dermatofunzionale è una nuova branca della fisioterapia, ovvero l’associazione della
                fisioterapia alla medicina estetica. Infatti, si utilizzano tecniche ed elettromedicali che vengono
                impiegati in fisioterapia riabilitativa.
            </p>
            <div>
                <p className="text-[18px]">
                    a fisioestetica dermatofunzionale agisce su uno spettro più ampio di salute e benessere andando ad
                    individuare le cause degli inestetismi e processi di invecchiamento, e viene impiegata nel
                    trattamento di:
                </p>
                <ul className="list-disc px-10">
                    <li>Cellulite</li>
                    <li>Tessuto adiposo localizzato</li>
                    <li>Smagliature</li>
                    <li>Dimagrimento</li>
                    <li>Gambe gonfie e pesanti</li>
                </ul>
                <p className="text-[18px] mt-4 mb-4">
                    Lo studio di fisioterapia e osteopatia Fisioste è specializzato nella cura delle patologie
                    dermatofunzionali.
                </p>
                <p className="text-[18px] mb-4">I trattamenti sono mirati a ripristinare le funzioni dei tessuti,
                    stimolando e aumentando il metabolismo cellulare, motivo per cui i risultati che ne derivano sono
                    detti <b>conservativi</b>, ovvero perdurano nel tempo dato che si agisce direttamente sulla radice
                    della
                    problematica e sono praticabili a qualsiasi età: non sono invasivi e sono indolore.
                </p>
                <p className="text-[18px] mb-4">
                    Il trattamento permette di ottenere risultati in:
                </p>
                <ul className="list-disc px-10">
                    <li>Riduzione degli inestetismi della cellulite</li>
                    <li>Rimodellamento corporeo</li>
                    <li>Miglioramento della circolazione</li>
                    <li>Aumento elasticità della pelle</li>
                </ul>
                <p className="text-[18px] mt-4 mb-4">
                    L’obiettivo è quello di favorire il ripristino e il miglioramento di deviazioni estetiche, che
                    influenzano direttamente l’autostima della persona e, di conseguenza, la qualità della vita.
                </p>
                <p className="text-[18px] mb-4">
                    Sono diversi i campi di applicazione della fisioestetica dermatofunzionale: innanzitutto opera per
                    riparare i tessuti e ripristinare l’attività funzionale del sistema epidermico; inoltre vengono
                    riorganizzate le fibre affinché siano elastiche e più funzionali.
                </p>
            </div>
        </>
    )

}