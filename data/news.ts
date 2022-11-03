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
]