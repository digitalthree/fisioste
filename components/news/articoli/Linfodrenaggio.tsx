import React from 'react';

export interface LinfodrenaggioProps {

}

const Linfodrenaggio: React.FC<LinfodrenaggioProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-3">Il drenaggio linfatico manuale è una delle tecniche utilizzate in quella che
                viene definita TERAPIA DECONGESTIVA COMPLESSA ad oggi considerata il trattamento d’eccellenza per i
                problemi linfovenosi. Della terapia decongestiva complessa fanno parte tecniche quali:
            </p>
            <ul className="list-disc px-10">
                <li>Drenaggio linfatico manuale</li>
                <li>Bendaggio multicomponente</li>
                <li>Terapia elettromedicale coadiuvante</li>
                <li>Cura della cute</li>
                <li>Utilizzo di calze o bracciali elastici</li>
                <li>Esercizio fisico</li>
                <li>Controllo del peso corporeo</li>
            </ul>
            <h2 className="text-secondary text-[25px] mt-4">A COSA È DOVUTA?</h2>
            <p className="text-[18px] mb-3">
                In particolare, il DLM è un massaggio dolce e ritmico eseguito da un fisioterapista opportunamente
                formato.
                Viene messo in pratica senza utilizzare oli o creme e la seduta ha una durata variabile a seconda delle
                zone che devono essere trattate.
                Al termine del trattamento la cute non deve apparire arrossata e il paziente non deve percepire nessun
                tipo di dolore. Prima di iniziare il drenaggio, il terapista eseguirà una opportuna valutazione al fine
                di comprendere come impostare il trattamento stesso ed individuare eventuali controindicazioni assolute.
            </p>
            <h2 className="text-secondary text-[25px] mt-4">QUANDO SI USA IL LINFODRENAGGIO?</h2>
            <p className="text-[18px] mb-3">
                Il drenaggio linfatico manuale viene utilizzato in tutti i casi in cui vi è un rallentamento della
                circolazione linfatica e venosa, per cause di varia natura come per esempio:
            </p>
            <ul className="list-disc px-10">
                <li>Cellulite</li>
                <li>Cattiva circolazione sanguigna</li>
                <li>Edemi</li>
                <li>Ristagno dei liquidi</li>
            </ul>
            <p className="text-[18px] mb-3">
                In pratica vi è indicazione ogni volta in cui vi sia un edema che si manifesta con un gonfiore
                localizzato e con sensazioni di tensione, pesantezza e fastidio.
                Lo scopo del drenaggio linfatico manuale è quello di incoraggiare il fluido linfatico in eccesso ad
                allontanarsi dall’area gonfia in modo che possa essere riassorbito efficacemente.
                Questo è possibile nel caso in cui i vasi siano integri. Nel caso in cui i vasi siano danneggiati o
                malfunzionanti, il drenaggio linfatico manuale aiuta a “spostare” i fluidi in altre zone funzionanti per
                favorirne il riassorbimento.
            </p>
            <p className="text-[18px] mb-3">
                Il Centro di Fisioterapia e Osteopatia Fisioste è il punto di riferimento a Teramo per questa patologia.
            </p>
            <p className="text-[18px] mb-3">
                Questo articolo è presente su: <br/>
                <a href="https://www.fisioterapiaitalia.com/terapie/linfodrenaggio/" rel="noreferrer"
                   target="_blank">
                    https://www.fisioterapiaitalia.com/terapie/linfodrenaggio/
                </a>
            </p>
        </>
    )
}

export default Linfodrenaggio