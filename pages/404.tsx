import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

interface Custom404Props {
}

const Custom404: React.FC<Custom404Props> = ({}) => {
    return(
        <>
            <div className="container m-auto hidden sm:flex items-center justify-center py-4">
                <Image src="/img/404/plug.png" width={313} height={530} layout="intrinsic" alt="plug"/>
                <div className="text-center flex-col ml-10 p-10 rounded-2xl bg-white shadow-2xl shadow-blue-200">
                    <h2 className="text-secondary">Siamo Spiacenti, pagina non trovata</h2>
                    <h1 className="text-secondary">Errore 404</h1>
                    <hr className="border-t-1 border-secondary mb-3 w-1/2 m-auto"/>
                    <Link href="/">
                        <span className="text-secondary hover:underline hover:cursor-pointer">
                            Torna alla Homepage
                        </span>
                    </Link>
                </div>
            </div>

            <div className="container m-auto sm:hidden py-36 bg-no-repeat"
                 style={{
                     backgroundImage: "url('/img/404/plug.png')",
                     backgroundSize: "contain",
            }}
            >
                <div className="text-center flex-col px-4 py-20 rounded-2xl bg-white bg-opacity-70 shadow-2xl shadow-blue-200">
                    <h2 className="text-secondary">Siamo Spiacenti, pagina non trovata</h2>
                    <h1 className="text-secondary">Errore 404</h1>
                    <hr className="border-t-1 border-secondary mb-3 w-1/2 m-auto"/>
                    <Link href="/">
                        <span className="text-secondary hover:underline hover:cursor-pointer">
                            Torna alla Homepage
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Custom404;