import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import AOS from "aos";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-datepicker/dist/react-datepicker.css";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import CookieConsent, {getCookieConsentValue, resetCookieConsentValue} from "react-cookie-consent";


function MyApp({Component, pageProps}: AppProps) {

    useEffect(() => {
        AOS.init()
    }, []);


    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Sito Web Fisioste"/>
                <title>Fisioste</title>
            </Head>
            <Navbar/>
            <Component {...pageProps} />
            <CookieConsent
                location="bottom"
                buttonText="Accetta"
                cookieName="Cookie_Fisioste"
                style={{background: "#264193", alignItems: "center"}}
                buttonStyle={{color: "white", backgroundColor: "#5a73b5", fontSize: "13px", borderRadius: "5px", fontWeight: 700}}
                buttonClasses="hover:opacity-70"
                expires={150}
                enableDeclineButton
                declineButtonText="Rifiuta"
                declineButtonStyle={{backgroundColor: "#969595", fontSize: "13px", borderRadius: "5px", fontWeight: 700}}
                declineButtonClasses="hover:opacity-50"
                onDecline={() => {

                }}
            >
                    <h2 className="text-white text-[20px] mb-2">Cookie Policy</h2>
                    <p>
                        Utilizziamo cookie e tecnologie simili sul nostro sito Web per elaborare i tuoi dati personali, come il
                        tuo indirizzo IP. Condividiamo questi dati anche con terze parti. Il trattamento dei dati può essere
                        effettuato con il tuo consenso o sulla base di un interesse legittimo, al quale puoi opporti nelle
                        singole impostazioni sulla privacy.
                    </p>


            </CookieConsent>
            <Footer/>
        </>

    )
}

export default MyApp
