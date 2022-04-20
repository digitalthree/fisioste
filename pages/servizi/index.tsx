import type {InferGetServerSidePropsType, NextPage} from 'next'
import Link from 'next/link'
import {Navbar} from "../../components/navbar/Navbar";
import {Footer} from "../../components/footer/Footer";
import React from "react";
import {fetchServizi} from "../api/servizi";
import {HeroServizi} from "../../components/servizi/components/HeroServizi";
import {GrigliaServizi} from "../../components/servizi/components/GrigliaServizi";

export async function getStaticProps() {

    let servizi = await fetchServizi()

    return {
        props: {
            servizi,
        },
        revalidate: 10, // In seconds
    }
}

const Servizi = ({servizi} : InferGetServerSidePropsType<typeof getStaticProps>) => {
    return (
        <>
            <HeroServizi/>
            <GrigliaServizi servizi={servizi}/>
        </>
    )
}

export default Servizi