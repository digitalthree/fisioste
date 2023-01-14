import React from 'react';

export interface BorsiteProps {

}

const Borsite: React.FC<BorsiteProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-3">La borsite, come tutte le condizioni che terminano con il suffisso “–ite” è
                un’infiammazione. SI tratta infatti di una patologia infiammatoria della borsa sinoviale che si trova in
                prossimità dell’olecrano dell’ulna.
            </p>
            <p className="text-[18px] mb-3">
                Al giorno d’oggi non sono state riscontrate delle cause dirette ben specifiche ma sono stati
                riconosciuti diversi fattori di rischio, che possono aumentarne le possibilità di insorgenza.
            </p>
            <p className="text-[18px] mb-3">
                I principali fattori di rischio per la borsite al gomito risultano essere: </p>
            <ul className="list-disc px-10">
                <li>Operazioni chirurgiche al gomito: comprese le operazioni mini invasive come le artroscopie;</li>
                <li>Microtraumi ripetuti nel tempo: in particolare nella loggia posteriore del gomito;</li>
                <li>Traumi importanti come le fratture: le lesioni ossee più frequenti per questa articolazione sono
                    la frattura dell’olecrano, la frattura del capitello radiale, la frattura distale dell’omero.
                </li>
                <li>Infezioni: capita che alcune borsiti siano provocate dalla puntura di un insetto che ha fatto
                    infezione;
                </li>
                <li>Forme di patologie reumatiche: come nel caso dell’artrite reumatoide o della gotta;</li>
                <li>Senza cause evidenti: esiste una piccola percentuale di pazienti che sviluppano la borsite al gomito
                    senza alcun motivo attualmente conosciuto.
                </li>
            </ul>
            <h2 className="text-secondary text-[25px] mt-4">QUALI I SINTOMI?</h2>
            <p className="text-[18px] mb-3">
                Questa condizione è caratterizzata dalla comparsa di diversi sintomi, da non confondere con quelli
                derivanti dall’epicondilite, che possono essere presenti in concomitanza o in parte:
            </p>
            <ul className="list-disc px-10">
                <li>Gonfiore e calore locale. Il gonfiore nei casi più gravi prende le dimensioni di diversi cm,
                    simili a quelle di una palla da ping pong;
                </li>
                <li>dolore, che è presente sia alla palpazione della borsa che al movimento soprattutto nei gradi di
                    massima flessione, poiché in quella posizione la borsa viene stressata. Il dolore normalmente è
                    locale, ma in alcuni casi si irradia sia verso il basso, lungo l’avambraccio, che verso l’alto,
                    lungo il braccio. Al dolore spesso è associata una sensazione di bruciore;
                </li>
                <li>riduzione della forza, in particolare nel movimento di estensione;
                </li>
                <li>riduzione della funzionalità articolare: difficoltà ad eseguire le normali attività quotidiane
                    come cucinare, guidare, portare la ventiquattrore, lavarsi i denti, indossare la giacca, pettinarsi
                    ecc…
                </li>
            </ul>
            <h2 className="text-secondary text-[25px] mt-4">E LA FISIOTERAPIA?</h2>
            <p className="text-[18px] mb-3">
                In cosa consiste la fisioterapia per la borsite al gomito?
            </p>
            <p className="text-[18px] mb-3">
                Per quanto riguarda le borsiti di natura prettamente muscolo scheletrica, come quelle causate da traumi
                precedenti, la fisioterapia è costituita di quattro elementi:
            </p>
            <ul className="list-disc px-10">
                <li>Tecniche di terapia manuale: hanno l’obbiettivo di migliorare il movimento fisiologico
                    dell’articolazione, lavorando con mobilizzazioni articolari e tecniche che aumentino la mobilità del
                    tessuto miofasciale. In alcuni casi, come in quelli post operatori, vi sono delle aderenze
                    connettivali delle cicatrici che possono alterare il movimento dell’articolazione.
                </li>
                <li>Mezzi fisici ad alta tecnologia: come il laser ad alta potenza, l’ipertermia, la tecarterapia, gli
                    ultrasuoni e onde d’urto.Hanno l’obbiettivo di stimolare la biologia del tessuto, riducendo il
                    dolore e controllando l’articolazione.
                </li>
                <li>Esercizi terapeutici: hanno l’obiettivo di recuperare il tono muscolare e la propriocezione del
                    gomito. L’esercizio attivo così come le mobilizzazioni hanno un ruolo importante nella riduzione del
                    dolore cronico, perché contribuiscono alla desensibilizzazione di un’area, come quella del gomito in
                    questo caso, che potrebbe essere ipersensibilizzata al movimento.
                </li>
                <li>Prevenzione dei comportamenti a rischio e informazione sui comportamenti da adottare: come ad
                    esempio evitare di mettere sotto carico la parte interessata dalla borsite, non poggiare il gomito
                    sul tavolo mentre si sta seduti, indossare il tutore durante la fase acuta, eseguire degli esercizi
                    specifici al mattino, applicare il ghiaccio la sera ecc…
                </li>
            </ul>
            <p className="text-[18px] mb-3">
                Normalmente in un ciclo di 10 sedute, con frequenza bisettimanale, si riesce a risolvere questa
                fastidiosa condizione e si possono riprendere tutte le normali attività di vita quotidiana.
            </p>
            <p className="text-[18px] mb-3">
                Il Centro di Fisioterapia e Osteopatia Fisioste è il punto di riferimento a Teramo per questa patologia.
            </p>
            <p className="text-[18px] mb-3">
                Questo articolo è presente su: <br/>
                <a href="https://www.fisioterapiaitalia.com/patologie/gomito/borsiste-del-gomito/" rel="noreferrer"
                   target="_blank">
                    https://www.fisioterapiaitalia.com/patologie/gomito/borsiste-del-gomito/
                </a>
            </p>
        </>
    )
}

export default Borsite