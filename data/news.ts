export interface News {
    id: number,
    titolo: string,
    descrizione: string,
    imgUrl: string,
    bannerImgUrl: string,
    categoria: 'Notizie' | 'Info'
}

export let news: News[] = [
    {
        id: 1,
        titolo: 'Terapia con campi elettromagnetici',
        descrizione: 'La tecnologia con campi elettromagnetici genera un intenso campo elettromagnetico che bypassa il sistema nervoso centrale e periferico stimolando, così, direttamente i motoneuroni che innervano i muscoli permettendo una contrazione muscolare completa senza necessità di contatto.',
        imgUrl: '/img/news/campi_elettromagnetici.webp',
        bannerImgUrl: '/img/news/campi_elettromagnetici_banner.png',
        categoria: "Notizie"
    },
    {
        id: 2,
        titolo: 'Fisioterapia anti-aging ed estetica curativa',
        descrizione: 'Agendo sui meccanismi profondi del corpo, Humantecar permette di recuperare la forma migliore – tanto dal punto di vista funzionale quanto estetico – assieme ad uno strato di benessere diffuso.',
        imgUrl: '/img/news/anti_aging.webp',
        bannerImgUrl: '/img/news/anti_aging_banner.png',
        categoria: "Notizie"
    },
    {
        id: 3,
        titolo: 'Introduzione – Dolore alla Spalla – Cause e Terapie ',
        descrizione: 'La spalla è senza dubbio l’articolazione più complessa del corpo umano. La sua ampia gamma di movimenti è possibile grazie alla complessità della sua anatomia. L’articolazione della spalla è a sua volta suddivisa in 5 articolazioni: ',
        imgUrl: '/img/news/dolore_alla_spalla.webp',
        bannerImgUrl: '/img/news/dolore_alla_spalla_banner.png',
        categoria: "Notizie"
    },
    {
        id: 4,
        titolo: 'Clinica delle Tendinopatie',
        descrizione: 'Cos’è un Tendine? I tendini sono l’insieme di fibre che uniscono il muscolo con l’osso. Sono ricoperti da una guaina che permette di scorrere e scivolare evitando attrito e proteggendolo dallo sfregamento con le altre strutture. ',
        imgUrl: '/img/news/tendinopatia.webp',
        bannerImgUrl: '/img/news/tendinopatie_banner.png',
        categoria: "Notizie"
    },
    {
        id: 5,
        titolo: 'Ginnastica Ipopressiva',
        descrizione: 'La ginnastica ipopressiva è una tecnica di riabilitazione posturale volta a rafforzare la fascia addominale e la muscolatura del pavimento pelvico, riequilibrando contemporaneamente le curve fisiologiche della colonna vertebrale.',
        imgUrl: '/img/news/Ipopressiva.webp',
        bannerImgUrl: '/img/news/Ipopressiva_banner.png',
        categoria: "Notizie"
    },
    {
        id: 6,
        titolo: 'Riabilitazione Pavimento Pelvico',
        descrizione: 'I rapporti sessuali non devono provocare dolore; avere dolore nella zona pelvica e genitale durante l’atto sessuale è un chiaro segnale e non deve essere ignorato!',
        imgUrl: '/img/news/pavimento_pelvico.webp',
        bannerImgUrl: '/img/news/pavimento_pelvico_banner.png',
        categoria: "Notizie"
    },
    {
        id: 7,
        titolo: 'Fisioterapia Donna',
        descrizione: '',
        imgUrl: '/img/home/terapiamanuale.webp',
        bannerImgUrl: '/img/servizi/banners/desktop/terapia_manuale_banner.webp',
        categoria: "Info"
    },
    {
        id: 8,
        titolo: 'Endometriosi',
        descrizione: 'L’endometriosi è una patologia cronica a carattere progressivo, che si verifica per la presenza dell’endometrio (tessuto che riveste la cavità uterina) all’esterno dell’utero stesso.',
        imgUrl: '/img/news/endometriosi.png',
        bannerImgUrl: '/img/news/pavimento_pelvico_banner.png',
        categoria: "Notizie"
    },
    {
        id: 9,
        titolo: 'Dito a scatto',
        descrizione: 'Il Morbo di Notta, o più conosciuto come dito a scatto, è una patologia che colpisce i tendini flessori delle dita della mano.',
        imgUrl: '/img/news/Dito_a_scatto.jpeg',
        bannerImgUrl: '/img/news/dito_a_scatto_banner.png',
        categoria: "Notizie"
    },
    {
        id: 10,
        titolo: 'Esercizio Terapeutico',
        descrizione: 'La MET è l’acronimo inglese di Medical Exercise Therapy, ed è il concetto di esercizio terapeutico per i pazienti che nasce nelle scuole di Terapia Manuale intorno agli anni ’60.',
        imgUrl: '/img/news/esercizio_terapeutico.jpeg',
        bannerImgUrl: '/img/news/esercizio_terapeutico_banner.png',
        categoria: "Notizie"
    },
    {
        id: 11,
        titolo: 'Il Mal Di Testa',
        descrizione: '“Mal di testa” è il termine con cui solitamente si tende a indicare qualsiasi dolore localizzato alla testa, di varia intensità e natura. È una delle condizioni più diffuse al mondo: solo in Italia si stima siano 7 milioni di persone a soffrirne.',
        imgUrl: '/img/news/mal_di_testa.jpeg',
        bannerImgUrl: '/img/news/mal_di_testa_banner.png',
        categoria: "Notizie"
    },
    {
        id: 12,
        titolo: 'Linfedema',
        descrizione: 'Il linfedema è una patologia cronica degenerativa, caratterizzata da una raccolta di fluidi, ricchi di proteine, nello spazio tra cute e sottocute, causato da un insufficiente drenaggio linfatico che può essere di tipo congenito o acquisito.',
        imgUrl: '/img/news/linfedema.jpeg',
        bannerImgUrl: '/img/news/linfedema_banner.png',
        categoria: "Notizie"
    },
    {
        id: 13,
        titolo: 'Tallonite',
        descrizione: 'La tallonite è un’infiammazione che colpisce la parte posteriore del piede, più precisamente il tallone. Le persone che soffrono di tallonite riferiscono un forte dolore nella zona del tallone. ',
        imgUrl: '/img/news/tallonite.jpeg',
        bannerImgUrl: '/img/news/tallonite_banner.png',
        categoria: "Notizie"
    },
    {
        id: 14,
        titolo: 'Borsite Gomito',
        descrizione: 'La borsite, come tutte le condizioni che terminano con il suffisso “–ite” è un’infiammazione. SI tratta infatti di una patologia infiammatoria della borsa sinoviale che si trova in prossimità dell’olecrano dell’ulna.',
        imgUrl: '/img/news/borsite_gomito.jpeg',
        bannerImgUrl: '/img/news/borsite_gomito_banner.png',
        categoria: "Notizie"
    },
    {
        id: 15,
        titolo: 'Fisioterapia Estetica Dermatofunzionale',
        descrizione: 'La Fisioterapia Dermatofunzionale è l\'area specialistica della fisioterapia clinica preposta alla valutazione e al trattamento dei disturbi fisico-estetici-funzionali derivanti da condizioni cliniche, patologie, interventi chirurgici ed eventi che influiscono direttamente o indirettamente sull\'integrità dell\'apparato tegumentario.',
        imgUrl: '/img/news/fisioterapia_estetica_dermatofunzionale.jpeg',
        bannerImgUrl: '/img/news/fisioterapia_estetica_dermatofunzionale_banner.png',
        categoria: "Notizie"
    },
    {
        id: 16,
        titolo: 'Sindrome del Piriforme',
        descrizione: 'La sindrome del piriforme si verifica quando il muscolo piriforme comprime il nervo sciatico, che scorre sotto di esso. I nervi sciatici (uno per lato) sono i nervi più lunghi e più grandi del corpo, viaggiano dalla parte inferiore della colonna vertebrale attraverso i glutei e lungo le gambe fino ai piedi.',
        imgUrl: '/img/news/sindrome_del_piriforme.jpeg',
        bannerImgUrl: '/img/news/sindrome_del_piriforme_banner.png',
        categoria: "Notizie"
    },
    {
        id: 17,
        titolo: 'Linfodrenaggio',
        descrizione: 'Il drenaggio linfatico manuale è una delle tecniche utilizzate in quella che viene definita TERAPIA DECONGESTIVA COMPLESSA ad oggi considerata il trattamento d’eccellenza per i problemi linfovenosi.',
        imgUrl: '/img/news/linfodrenaggio_vodder.jpeg',
        bannerImgUrl: '/img/news/linfodrenaggio_vodder_banner.png',
        categoria: "Notizie"
    },
    {
        id: 18,
        titolo: 'Vertigini e Cervicale',
        descrizione: 'Le vertigini cervicali sono un tipo di vertigine in cui si verifica sia dolore al collo, che sensazione di disorientamento e instabilità. Chi soffre di vertigini cervicali sente come se il mondo intorno stesse girando e, quasi sempre, anche dolore al collo.',
        imgUrl: '/img/news/vertigini_cervicale.jpeg',
        bannerImgUrl: '/img/news/vertigini_cervicale_banner.png',
        categoria: "Notizie"
    },
    {
        id: 19,
        titolo: 'Ernia Lombare',
        descrizione: 'L’ernia del disco è una condizione in cui, a seguito di importanti sollecitazioni il nucleo polposo fuoriesce dall’anulus fibroso. ',
        imgUrl: '/img/news/ernia_lombare.jpeg',
        bannerImgUrl: '/img/news/ernia_lombare_banner.png',
        categoria: "Notizie"
    },
    {
        id: 20,
        titolo: 'Colpo Della Strega',
        descrizione: 'Questa condizione in cui si avverte un forte dolore alla colonna, così forte che il soggetto non riesce a muoversi rientra tra le problematiche più diffuse di mal di schiena, e di queste è la forma di dolore più acuto.',
        imgUrl: '/img/news/colpo_della_strega.jpeg',
        bannerImgUrl: '/img/news/colpo_della_strega_banner.png',
        categoria: "Notizie"
    },
    {
        id: 21,
        titolo: 'Fibromialgia',
        descrizione: 'La fibromialgia è una patologia molto comune, caratterizzata da diffuso dolore muscoloscheletrico associato ad affaticamento, disturbi del sonno, perdita di memoria e alterazioni dell’umore.',
        imgUrl: '/img/news/fibromialgia.jpeg',
        bannerImgUrl: '/img/news/fibromialgia_banner.png',
        categoria: "Notizie"
    },
]