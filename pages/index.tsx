import type {InferGetServerSidePropsType} from 'next'
import {HomePage} from "../components/home/Home";
import {fetchServizi} from "./api/servizi";

export async function getStaticProps() {

    let servizi = await fetchServizi()

    return {
        props: {
            servizi,
        },
        revalidate: 10, // In seconds
    }
}


const Home = ({servizi} : InferGetServerSidePropsType<typeof getStaticProps>) => {

    return (
      <>
        <HomePage servizi={servizi}/>
      </>
  )
}

export default Home
