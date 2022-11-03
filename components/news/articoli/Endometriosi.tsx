import React from 'react';

interface EndometriosiProps {
}

export const Endometriosi: React.FC<EndometriosiProps> = ({}) => {
    return (
        <>
            <h2 className="text-secondary text-[25px] mt-4">COS’E’ L’ENDOMETRIOSI?</h2>
            <p className="text-[18px]">
                L’endometriosi è una patologia cronica a carattere progressivo, che si verifica per la presenza
                dell’endometrio (tessuto che riveste la cavità uterina) all’esterno dell’utero stesso. Le sedi
                maggiormente colpite sono a livello delle ovaie, tube, intestino, vagina e vescica e, lo sfaldamento di
                questo tessuto ad ogni ciclo provoca infiammazione che è riscontrabile dalla presenza di tessuto
                cicatriziale e aderenze.
            </p>

            <h2 className="text-secondary text-[25px] mt-4">QUALI SONO I SINTOMI?</h2>
            <p className="text-[18px]">
                Uno dei sintomi che caratterizza l’endometriosi è il dolore pelvico, ovvero un dolore cronico che può
                presentarsi durante:
            </p>
            <ul className="list-disc px-10">
                <li>il ciclo mestruale;</li>
                <li>un rapporto sessuale;</li>
                <li>la minzione;</li>
                <li>l’ovulazione.</li>
            </ul>
            <p className="text-[18px]">
                Questa patologia si riscontra maggiormente nelle donne in età fertile, ma si può presentare già dalla
                prima mestruazione fino alla menopusa.
            </p>

            <h2 className="text-secondary text-[25px] mt-4">QUAL È IL TRATTAMENTO?</h2>
            <p className="text-[18px]">
                Oltre all’approccio farmacologico e chirurgico, d’accordo con la ginecologa di riferimento è possibile
                affiancare un percorso di fisioterapia per alleviare il fenomeno del dolore pelvico. Nelle donne affette
                da endometriosi si riscontra molto spesso un aumento del tono dei muscoli del pavimento pelvico,
                condizione che si verifica come reazione di difeso del nostro organismo a tale situazione e soprattutto
                che va ad accentuare, molto di più il dolore avvertito.
                L’obiettivo della fisioterapia è quello di rilassare principalmente la muscolatura del pavimento pelvico
                con tecniche sia di terapia manuale che strumentale, in relazione al quadro sintomatologico del paziente
                con un percorso studiato su misura.
            </p>
        </>
    )

}