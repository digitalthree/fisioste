import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import AOS from "aos";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-datepicker/dist/react-datepicker.css";
import 'aos/dist/aos.css';
import {useEffect} from "react";



function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        AOS.init()
    }, []);


  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Sito Web Fisioste"/>
          <title>Fisioste</title>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </>

  )
}

export default MyApp
