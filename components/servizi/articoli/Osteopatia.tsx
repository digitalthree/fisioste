import React from 'react';

interface OsteopatiaProps {
}

export const Osteopatia: React.FC<OsteopatiaProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-4">
                L’Osteopatia è una disciplina olistica manuale, che si occupa di vegliare sullo stato di salute del
                nostro corpo, per mantenere questo stato di salute in equilibrio, oppure per ritrovarlo nel caso lo si
                fosse perso.
                Quello che crede l’osteopatia è che il corpo umano possiede dei meccanismi di autoregolazione e di
                autoguarigione. Per questo motivo l’osteopata si trova ad essere soprattutto un catalizzatore, un
                tramite che crea le condizioni migliori, affinché il corpo si possa autoregolare e auto-guarirsi.
            </p>
            <p className="text-[18px] mb-4">
                C’è un legame stretto tra la struttura (la parte anatomica) e la funzione: la struttura controlla la
                funzione e la funzione condiziona la struttura; dunque, quando per qualche motivo in seguito a traumi
                interni o esterni al corpo, qualcosa cambia nella struttura, la normale funzione ne viene inficiata,
                dunque si parla di “lesione osteopatica”.
            </p>
            <p className="text-[18px] mb-4">
                L’osteopatia individuando e rimuovendo queste lesioni, permette di recuperare il normale riequilibrio e
                favorisce il mantenimento dell’omeostasi di tutto il sistema. La “lesione osteopatica” si esplica
                soprattutto nel sistema fasciale, un tessuto che nel nostro organismo divide e collega tutto: organi,
                muscoli...
                Ancora oggi, quando si parla di osteopatia si hanno le idee confuse: non è molto chiaro di cosa si
                tratta. La maggior parte delle persone che si recano dall’osteopata non sanno cosa aspettarsi, quindi a
                volte si affronta la seduta con ansia o con aspettative molto alte.
            </p>
            <p className="text-[18px] mb-4">
                Per disciplina olistica si intende una pratica che pensa al corpo come ad un tutt’uno, dove tutto è
                concatenato; l’osteopatia, infatti, è supportata da un profondo studio dell’anatomia e si avvale delle
                stesse conoscenze della medicina tradizionale.
            </p>
            <p className="text-[18px] mb-4">
                Esistono diversi approcci o aree di trattamento:
            </p>
            <ul className="list-disc px-10">
                <li>Osteopatia Cranio-sacrale, che pone la sua attenzione sull’asse che va dal cranio all’osso sacro;
                </li>
                <li>Osteopatia Viscerale, che si occupa delle disfunzioni che si esplicano nei visceri e nel sistema
                    fasciale ad essi interconnesso;
                </li>
                <li>Osteopatia Fasciale, che ha il compito di liberare il corpo da possibili disfunzioni del sistema
                    fasciale;
                </li>
                <li>Osteopatia Strutturale, conosciuta soprattutto per le manipolazioni vertebrali. In realtà si occupa
                    di ripristinare il buon movimento della struttura.
                </li>
            </ul>
            <p className="text-[18px] mt-4">
                L’Osteopatia Pediatrica, si occupa principalmente di tutti i disturbi e le disfunzioni che intercorrono
                durante il periodo neonatale. Si occupa di far ritrovare il benessere al neonato e quindi favorire anche
                i neogenitori nell’adempiere al loro nuovo ruolo, ma anche di prevenire disturbi futuri.
            </p>
        </>

    )

}