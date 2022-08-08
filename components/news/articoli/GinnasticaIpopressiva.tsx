import React from 'react';

interface GinnasticaIpopressivaProps {
}

export const GinnasticaIpopressiva: React.FC<GinnasticaIpopressivaProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-3">La ginnastica ipopressiva è una tecnica di riabilitazione posturale volta a
                rafforzare la fascia addominale e la muscolatura del pavimento pelvico, riequilibrando
                contemporaneamente le curve fisiologiche della colonna vertebrale.
            </p>
            <p className="text-[18px] mb-3">
                È composta da una serie di particolari esercizi seguiti da una specifica tecnica respiratoria definita
                “falsa inspirazione”: ovvero un’inspirazione a glottide chiusa preceduta da un’apnea espiratoria con
                sollecitazione del diaframma e dei muscoli respiratori ausiliari.
                Questo meccanismo genera una pressione negativa nel torace, nell’addome e nel perineo, che comporta
                l’attivazione del muscolo trasverso e i muscoli del pavimento pelvico.
            </p>
            <p className="text-[18px] mb-3">
                Ciò ha effetti positivi sugli organi pelvici, sull’apparato digerente, sull’apparato circolatorio e
                sulla colonna vertebrale.
                Il fisioterapista specializzato effettua inizialmente una valutazione clinico-funzionale: fondamentale è
                l’anamnesi del paziente raccogliendo quanti più dati possibili soprattutto su:
            </p>
            <ul className="list-disc px-10">
                <li>Disfunzioni dello svuotamento vescicale</li>
                <li>Disfunzione anorettali</li>
                <li>Prolassi</li>
                <li>Disfunzioni sessuali</li>
                <li>Generalità</li>
                <li>Storico del paziente</li>
            </ul>
            <p className="text-[18px] mb-4 mt-4">
                Successivamente viene svolto un esame obiettivo del paziente mirato a valutare: l’assetto posturale, la
                funzionalità del pavimento pelvico, lo stato della muscolatura respiratoria e addominale.
                Dopo un’accurata valutazione di tutti gli elementi raccolti, il fisioterapista studia il programma ad
                hoc per il paziente.
                La ginnastica ipopressiva, quindi è indicata per:
            </p>
            <ul className="list-disc px-10">
                <li>Trattamento e prevenzione dell’incontinenza urinaria</li>
                <li>Riequilibrio posturale</li>
                <li>Trattamento diastasi addominale</li>
                <li>Riabilitazione post-partum</li>
                <li>Prevenzione ernie addominali, inguinali, ...</li>
                <li>Gambe pesanti</li>
                <li>Riduzione circonferenza addominale</li>
            </ul>
        </>
    )

}