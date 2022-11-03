import React, {useEffect, useState} from 'react';
import {FaRegCheckCircle} from "react-icons/fa";

interface FormContattiProps {
}

export const FormContatti: React.FC<FormContattiProps> = ({}) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [messaggio, setMessaggio] = useState('');

    const [loading, setLoading] = useState(false);
    const [emailInviata, setEmailInviata] = useState<'inviata' | 'errore' | 'standby'>('standby');


    const inviaEmail = async () => {
        setLoading(true)
        try {
            let data = {
                nome: nome,
                email: email,
                telefono: telefono,
                messaggio: messaggio
            }
            await fetch('/api/emailContatti', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, *!/!*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            setLoading(false)
            setEmailInviata('inviata')
            setNome('')
            setEmail('')
            setTelefono('')
            setMessaggio('')
            setTimeout(() => {
                setEmailInviata('standby')
            }, 5000)
        } catch (e) {
            setEmailInviata('errore')
            setTimeout(() => {
                setEmailInviata('standby')
            }, 5000)
        }
    }

    return(
        <>
            <div className="flex flex-col justify-between h-[440px] md:h-full"
                 data-aos="fade-up"
                 data-aos-duration="2000"
                 data-aos-once="true"
                 data-aos-delay={250}
            >
                <span className="lg:text-[20px] text-secondary mb-2 sm:mb-0">Compila il form per maggiori informazioni</span>
                <div className="w-full">
                    <input
                        className="appearance-none border-2 border-[#6b84c7] rounded-xl w-full px-4 py-3 text-[14px] text-secondary focus:outline-none"
                        type="text"
                        placeholder="Nome e Cognome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <input
                        className="appearance-none border-2 border-[#6b84c7] rounded-xl w-full px-4 py-3 text-[14px] text-secondary focus:outline-none"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <input
                        className="appearance-none border-2 border-[#6b84c7] rounded-xl w-full px-4 py-3 text-[14px] text-secondary focus:outline-none"
                        type="number"
                        placeholder="Telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
                <div className="">
                <textarea
                    className="border-2 border-[#6b84c7] rounded-xl h-[150px] md:h-[200px] w-full px-4 py-3 text-secondary focus:outline-none"
                    placeholder="Messaggio"
                    value={messaggio}
                    onChange={(e) => setMessaggio(e.target.value)}
                />
                </div>
                <div className="relative">
                    {loading && <span className="flex h-5 w-5 absolute right-0">
                                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#e1edff] opacity-75"/>
                                    <span className="relative inline-flex rounded-full h-5 w-5 bg-[#e1edff]"/>
                                </span>
                    }

                    <button
                        className='px-4 py-3 w-full rounded-full bg-secondary text-white font-bold mr-7 hover:opacity-80'
                        onClick={() => {
                            inviaEmail()
                        }}
                    >
                        INVIA EMAIL

                    </button>

                </div>
                {emailInviata === 'inviata' &&
                    <div className="animate-pulse bg-indigo-300 relative  border-l-4 border-indigo-500 text-secondary p-5" role="alert">
                        <p className="font-bold">Invio Email</p>
                        <p>Email inviata correttamente. Cercheremo di contattarla al più presto.</p>
                        <span className="flex h-5 w-5 absolute right-2 top-1">
                        <FaRegCheckCircle size={25} color="#264193"/>
                    </span>
                    </div>
                }
                {emailInviata === 'errore' &&
                    <div className="animate-pulse bg-red-300 relative border-l-4 border-red-500 text-red-700 p-5" role="alert">
                        <p className="font-bold">Invio Email</p>
                        <p>Email NON inviata correttamente. Riprovare.</p>
                    </div>
                }
            </div>
        </>
    )

}