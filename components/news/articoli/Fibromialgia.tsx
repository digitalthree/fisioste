import React from 'react';

export interface FibromialgiaProps {

}

const Fibromialgia: React.FC<FibromialgiaProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-3">La fibromialgia è una patologia molto comune, caratterizzata da diffuso
                dolore muscoloscheletrico associato ad affaticamento, disturbi del sonno, perdita di memoria e
                alterazioni dell’umore.
                La fibromialgia spesso viene confusa con altre patologie perché è un insieme di segni e sintomi sia di
                natura muscolo scheletrica che di natura psico-emotiva.
                È una condizione molto invalidante, soprattutto dovuta al fatto che i dolori vengono considerati
                immaginari, inventati.
                Colpisce quasi 2 milioni di italiani, perlopiù donne, e si manifesta generalmente tra i 25 e i 55 anni.
                Non essendone note le cause, attualmente non esiste una cura specifica per la fibromialgia ma sono
                disponibili diverse terapie che tendono a controllarne e ad alleviarne i disturbi.
                I sintomi a volte si manifestano dopo un trauma, un intervento chirurgico, un’infezione o uno stress
                psicologico significativo: in altri casi, i sintomi si accumulano gradualmente nel tempo senza alcun
                singolo evento scatenante.

            </p>
            <h2 className="text-secondary text-[25px] mt-4">QUALI SONO I SINTOMI?</h2>
            <p className="text-[18px] mb-3">
                I sintomi causati dalla fibromialgia sono numerosi e di intensità variabile da persona a persona: il
                dolore della fibromialgia è un dolore costante, esteso su tutto il corpo e viene percepito come una
                sensazione di bruciore e formicolio che diventa sempre più penetrante quando si esercita una pressione
                su parti più specifiche del corpo. <br/>
                I più comuni sono:
            </p>
            <ul className="list-disc px-10">
                <li>l’affaticamento: riferito dalla maggior parte degli affetti da fibromialgia nonostante un adeguato
                    riposo;
                </li>
                <li>il disturbo del sonno: difficoltà ad addormentarsi, frequenti risvegli notturni, sonno non
                    ristoratore;
                </li>
                <li>il dolore diffuso: crescente, decrescente, spesso aggravato dallo stress e dal cambio climatico;
                </li>
                <li>il mal di testa: spesso muscolotensivo, con dolore facciale a livello mascellare o mandibolare;</li>
                <li>la difficoltà di concentrazione: spesso riferita come confusione mentale;</li>
                <li>i disturbi gastro-intestinali: associati a dolori addominali e colon irritabile.</li>
            </ul>
            <h2 className="text-secondary text-[25px] mt-4">QUALI SONO LE CAUSE?</h2>
            <p className="text-[18px] mb-3">
                Le cause esatte dell’insorgenza della fibromialgia, ad oggi purtroppo non sono ancora note.
                Ricerche scientifiche mostrano che sia un insieme di fattori a portare alla comparsa della fibromialgia:
            </p>
            <ul className="list-disc px-10">
                <li>fattori genetici;</li>
                <li>fattori infettivi;</li>
                <li>fattori ormonali;</li>
                <li>traumi fisici;</li>
                <li>traumi psicologici;</li>
            </ul>
            <p className="text-[18px] mb-3">
                Gli esperti pensano sia dovuta al modo in cui il cervello processa il dolore: ovvero che il cervello e
                il sistema nervoso centrale non riescono ad elaborare correttamente i normali segnali del dolore.
            </p>
            <h2 className="text-secondary text-[25px] mt-4">COME POSSIAMO TRATTARLA?</h2>
            <p className="text-[18px] mb-3">
                La fisioterapia gioca un ruolo fondamentale nella vita di un paziente affetto da fibromialgia: il
                fisioterapista deve innanzitutto valutare la fase del dolore: fase acuta, fase di latenza e fase cronica
                perché, in base alla fase di dolore nella quale si trova il paziente verranno adattate le manovre
                fisioterapiche.
                Inoltre, è molto importante “educare” il paziente in maniera adeguata: spiegare cosa è veramente la
                fibromialgia, quali sono i fattori che possono aggravare e quali quelli che possono migliorare la
                condizione; studi dimostrano che, una persona ben cosciente della condizione nella quale si trova è
                capace di attivare percorsi neurali inibitori in grado di abbassare il livello del dolore, aumentando la
                percezione della qualità della vita.
                Successivamente si passa alla terapia manuale con tecniche specifiche volte a “sciogliere” contratture
                muscolari e si introduce un percorso terapeutico con esercizi funzionali.
                Un regolare esercizio fisico moderato ed una fisioterapia mirata sono le chiavi per controllare questa
                patologia.
                Una volta stabilizzato il dolore, il programma fisioterapico riabilitativo, deve prevedere un ritorno, o
                una riscoperta, dell’attività motoria tenendo conto che in molti casi questi pazienti non hanno mai
                praticato in età adulta ad eccezione di qualche sporadica attività sportiva giovanile.

            </p>
            <p className="text-[18px] mb-3">
                Il Centro di Fisioterapia e Osteopatia Fisioste è il punto di riferimento a Teramo per questa patologia.
            </p>
        </>
    )
}

export default Fibromialgia