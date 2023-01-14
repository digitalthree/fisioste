import React from 'react';

export interface EsercizioTerapeuticoProps {

}

const EsercizioTerapeutico: React.FC<EsercizioTerapeuticoProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-3">La MET è l’acronimo inglese di Medical Exercise Therapy, ed è il concetto di
                esercizio terapeutico per i pazienti che nasce nelle scuole di Terapia Manuale intorno agli anni ’60.
            </p>
            <p className="text-[18px] mb-3">Quest’idea nasce con l’obbiettivo di istruire i pazienti per percorsi di
                auto esercizio regolari, in modo che: possano recuperare / migliorare le proprie capacita fisiche, di
                equilibrio e propriocezione senza correre il rischio di farsi male, e possano automatizzare delle regole
                e degli schemi di movimento che prevengano eventuali affezioni al sistema muscolo scheletrico.
            </p>
            <p className="text-[18px] mb-3">Tali obbiettivi si raggiungono tramite la mobilizzazione articolare, il
                rilassamento e l’allungamento di muscoli contratti e il miglioramento in modo equilibrato della forza,
                della resistenza e della coordinazione. La differenza sostanziale fra l’esercizio di uno sportivo
                agonista e l’esercizio terapeutico per un paziente è che nel primo caso si parte da un fisico in ottime
                condizioni che ricerca una perfezione della performance, nel secondo caso invece si parte da un fisico
                con delle problematiche e che deve recuperare o mantenere una buona qualità di vita.
            </p>
            <p className="text-[18px] mb-3">Nell’esercizio terapeutico dunque il professionista terrà conto delle
                problematiche articolari, e muscolari del paziente al fine di impostare un programma di esercizi
                terapeutici idonei.
            </p>
            <p className="text-[18px] mb-3">L’esercizio in ambito fisioterapico è usato in tutti gli ambiti. Da un punto
                di vista psicologico, contribuisce a rendere il paziente consapevole del suo ruolo nel percorso
                terapeutico. L’idea che la persona si cosciente di essere parte attiva nel ciclo di guarigione permette
                di portare a termine gli obbiettivi prefissati, velocizzare i tempi di recupero e rendere meno
                stressanti le terapie e gli esercizi.
            </p>
            <p className="text-[18px] mb-3">Ogni esercizio terapeutico è costituito di cinque fattori che possono avere
                maggiore o minore rilevanza a seconda dell’obbiettivo dell’esercizio:
            </p>
            <ul className="list-disc px-10">
                <li>Forza</li>
                <li>Velocità</li>
                <li>Resistenza</li>
                <li>Coordinazione</li>
                <li>Mobilità</li>
            </ul>
            <p className="text-[18px] mb-3 mt-3">Queste cinque skills consentono di migliorare le capacità motorie della
                persona, sarà compito del fisioterapista specializzato saper valutare quale delle cinque necessità
                maggiore focus, così da impostare il piano di esercizi terapeutici più adatto alle esigenze del
                paziente.
            </p>
            <p className="text-[18px] mb-3">Per pianificare gli esercizi terapeutici specifici è necessario l’intervento
                di uno specialista, però nel frattempo riteniamo utile darti qualche semplice indicazione.
            </p>
            <p className="text-[18px] mb-3">Suddivideremo la pianificazione degli esercizi in vari step in modo da
                essere più chiari:
            </p>
            <ul className="list-disc px-10">
                <li>Fissare l’obbiettivo: qual è lo scopo dell’esercizio? Recuperare una buona performance
                    cardiorespiratoria? Recuperare la forza degli arti inferiori? Recuperare la funzionalità di una
                    spalla operata?
                </li>
                <li>Il calcolo del peso, dei tempi e delle resistenze: come sai a seconda del tipo di esercizio, essi
                    vengono effettuati con delle resistenze e dei tempi specifici. Un esercizio che miri alla
                    resistenza, ad esempio, avrà dei tempi più lunghi e dei pesi minori rispetto a un esercizio per
                    l’ipertrofia.
                </li>
                <li>Il riscaldamento: è una fase fondamentale per prevenire traumi da sforzo e per aumentare le
                    performance durante gli esercizi. Il riscaldamento è sempre un’attività aerobica il cui scopo è di
                    aumentare la mobilità e l’idratazione dei tessuti prima dell’esercizio.
                </li>
                <li>Esecuzione degli esercizi: soprattutto nel primo periodo è importante essere seguiti da un
                    professionista al fine di effettuare i movimenti in modo ergonomico e corretto.
                </li>
                <li>Fine degli esercizi: solitamente si pratica un’attività defaticante prima di interrompere
                    definitivamente l’attività.
                </li>
            </ul>
            <p className="text-[18px] mt-3">Il Centro di Fisioterapia e Osteopatia Fisioste è il punto di riferimento a
                Teramo per questa patologia.
            </p>
        </>
    )
}

export default EsercizioTerapeutico