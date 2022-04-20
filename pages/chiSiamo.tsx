import type {NextPage} from 'next'
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import React from "react";

import Image from 'next/image';
import {ChiSiamoComponent} from "../components/chisiamo/ChiSiamoComponent";
import {fetchServizi} from "./api/servizi";
import {fetchTeamMembers} from "./api/team";
import {InferGetServerSidePropsType} from "next";

export async function getStaticProps() {

    let team = await fetchTeamMembers()

    return {
        props: {
            team,
        },
        revalidate: 10, // In seconds
    }
}

const ChiSiamo = ({team} : InferGetServerSidePropsType<typeof getStaticProps>) => {
    return <ChiSiamoComponent team={team}/>
}

export default ChiSiamo