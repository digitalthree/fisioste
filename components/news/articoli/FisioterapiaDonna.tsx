import React from 'react';

interface FisioterapiaDonnaProps {
}

export const FisioterapiaDonna: React.FC<FisioterapiaDonnaProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-4">
                Abbiamo creato un centro a Teramo per la cura delle patologie per la Donna.
            </p>
            <p className="text-[18px] mb-4">
                Quali sono i trattamenti?
            </p>
            <ul className="list-disc px-10">
                <li>Riabilitazione ginecologica che riguarda tutte le patologie del pavimento pelvico, efficaci sia
                    nella giovane età per quello che riguarda le problematiche come dolori mestruali, endometriosi,
                    vulvodinia, etc, sia per le donne che affrontano la gravidanza e tutte le patologie annesse come
                    diastasi, ipertono/ipotono, cicatrici, dolore cronico, incontinenza, ed inoltre per le donne in età
                    adulta che devono affrontare le problematiche della menopausa.
                </li>
            </ul>
            {/*<p className="text-[18px] mb-4 mt-4">
                Le patologie del pavimento pelvico sono spesso associate ad un’alterazione del tono muscolare, ipotono e
                ipertono.
            </p>*/}
            <ul className="list-disc px-10">
                <li>Riabilitazione dermatofunzionale e Fisioestetica che vanno a trattare tutte le patologie come
                    cellulite, adipe localizzato, smagliature, dimagrimento localizzato, segni del tempo sul viso, gambe
                    gonfie e pesanti. Ci occupiamo di Fisioestetica dal 2015 e siamo specializzati nell’elaborazione di
                    programmi riabilitativi personalizzati che permettono di ottenere risultati duraturi nel tempo.
                </li>
            </ul>
            <p className="text-[18px] mb-4 mt-4">
                Utilizziamo le migliori tecnologie e apparecchiature con certificazioni medicali come: Tecar, Onde
                d’urto, Criolipolisi, Physio TT, Campi elettromagnetici ad alta intensità, Cavitazione, Radiofrequenza.
            </p>
            <ul className="list-disc px-10">
                <li>Riabilitazione posturale ed esercizio terapeutico. Siamo l’unico centro a Teramo specializzati nella
                    cura e prevenzione di patologie della colonna vertebrale e apparato viscerale mediante l’utilizzo di
                    tecniche di terapia manuale, posturale metodo Mezieres, ginnastica Ipopressiva, Pilates Fisio.
                </li>
            </ul>
        </>
    )

}