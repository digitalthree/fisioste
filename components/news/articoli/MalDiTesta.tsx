import React from 'react';

export interface MalDiTestaProps {

}

const MalDiTesta: React.FC<MalDiTestaProps> = ({}) => {
    return (
        <>
            <p className="text-[18px] mb-3">“Mal di testa” è il termine con cui solitamente si tende a indicare
                qualsiasi dolore localizzato alla testa, di varia intensità e natura. È una delle condizioni più diffuse
                al mondo: solo in Italia si stima siano 7 milioni di persone a soffrirne.
            </p>
            <p className="text-[18px] mb-3">La cefalea non risparmia neanche i bambini: infatti tra il 10% e il 20%
                della popolazione giovanile ne soffre, e di questi circa la metà continueranno ad avvertire mal di testa
                anche da adulti.
                Il dolore alla testa può essere più o meno intenso, continuo o intermittente, manifestarsi in modo
                cronico o episodico e può essere accompagnato da ipersensibilità a luci e suoni, nausea, vomito e
                lacrimazione. Può interessare tutto il capo o risultare circoscritto a una specifica area della testa e
                spesso basta un odore, come un profumo troppo eccessivo, a scatenarlo.
            </p>
            <h2 className="text-secondary text-[25px] mt-4">QUANTI TIPI DI MAL DI TESTA ESISTONO?</h2>
            <p className="text-[18px] mb-3">Il mal di testa viene comunemente classificato in cefalea primaria e cefalea
                secondaria che a loro volta vengono distinte in ulteriori gruppi. <br/>
                La cefalea primaria include:
            </p>
            <ul className="list-disc px-10">
                <li>cefalee a grappolo,</li>
                <li>cefalee trigemino autonomiche,</li>
                <li>cefalea muscolo tensiva, è trattata anche dal fisioterapista,</li>
                <li>emicrania, è tratta dal fisioterapista,</li>
                <li>altre tipologie di cefalee.</li>
            </ul>
            <p className="text-[18px] mb-3">Le cefalee secondarie sono otto gruppi e di queste quelli appartenenti ad
                interesse fisioterapico sono:
            </p>
            <ul className="list-disc px-10">
                <li>cefalea o dolore facciale conseguenti a disordini dell’ATM,</li>
                <li>cefalea cervicogenica</li>
                <li>nevralgia occipitale.</li>
            </ul>
            <h2 className="text-secondary text-[25px] mt-4">COSA PUO’ FARE LA FISIOTERAPIA PER IL MAL DI TESTA?</h2>
            <p className="text-[18px] mb-3">Dopo aver effettuato un’accurata valutazione da un fisioterapista
                specializzato, quest’ultimo pianificherà il percorso riabilitativo migliore per il tipo di mal di testa
                del paziente che ha davanti.
                Il trattamento fisioterapico per il mal di testa dunque è molto specifico, e varia da persona a persona:
                molto spesso è derivante da contratture muscolari del collo e della testa, ma anche da una scorretta
                postura o disturbi mandibolari.
            </p>
            <p className="text-[18px] mb-3">L’impiego di tecniche di terapia manuale e trattamenti di osteopatia
                contribuiscono alla diminuzione della sintomatologia dolorosa dovuta al mal di testa, che nella maggior
                parte dei casi diventa invalidante; ma anche combinare l’utilizzo di elettromedicali di ultima
                generazione alla riabilitazione posturale risulta essere un ottimo antidolorifico per il mal di testa.
                Perché?
            </p>
            <p className="text-[18px] mb-3">Perché dopo aver attenuato la fase dolorosa, la riabilitazione posturale ha
                come obiettivo quello di ripristinare la simmetria del corpo nella sua globalità andando a lavorare, in
                questo caso, su contratture cervicali che danno esiti di forti mal di testa.
                Il Centro di Fisioterapia e Osteopatia Fisioste è il punto di riferimento a Teramo per questa patologia.
            </p>
        </>
    )
}

export default MalDiTesta