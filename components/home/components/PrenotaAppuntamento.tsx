import React, {useState} from 'react';
import {MySelect} from "../../shared/MySelect";
import DatePicker from "react-datepicker";
import Image from "next/image";
import {FaRegCheckCircle} from "react-icons/fa";
import {Servizio} from "../../../pages/api/servizi";

interface PrenotaAppuntamentoProps {
    servizi: Servizio[],
    backgroundColor?: string,
    servizioSelezionatoDefault?: { id: number, value: string },
}

export const PrenotaAppuntamento: React.FC<PrenotaAppuntamentoProps> = ({servizi, backgroundColor, servizioSelezionatoDefault}) => {

    let options: { id: number, value: string }[] = []

    servizi.forEach(servizio => {
        options.push({id: servizio.id, value: servizio.name})
    })

    const [startDate, setStartDate] = useState(new Date());
    const [dataPrenotazione, setDataPrenotazione] = useState(new Date().toLocaleDateString());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailInviata, setEmailInviata] = useState<'inviata' | 'errore' | 'standby'>('standby');

    const inviaEmail = async () => {
        setLoading(true)
        try {
            let data = {
                name: name,
                email: email,
                servizio: service,
                data: dataPrenotazione
            }
            await fetch('/api/emailPrenotazione', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, *!/!*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            setLoading(false)
            setEmailInviata('inviata')
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

    return (
        <div className={`${backgroundColor ? backgroundColor : 'bg-gradient-to-b from-[#efefef] to-[#e1edff]'}`}>
            <div
                className=" bg-primary container hidden xl:flex xl:justify-around m-auto h-[110px] w-full px-8 rounded-full items-center"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                {/*<h2 className="text-white text-2xl">Prenota un appuntamento</h2>*/}

                <MySelect options={options}
                          classNameContainer="w-[200px]" classNameButton="rounded-full px-4 py-3" backgroundColor="#6b84c7"
                          textColor="#264193" backgroundOptionColor="#6b84c7" backgroundColorOptionsContainer="#e1edff"
                          placeholder="Seleziona un servizio"
                          onChange={(e) => setService(e.value)}
                          defaultValues={servizioSelezionatoDefault}
                />

                <div className="w-[200px]">
                    <DatePicker className="rounded-full w-full px-4 py-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                                selected={startDate} onChange={(date: Date) => {
                        setStartDate(date)
                        setDataPrenotazione(date.toLocaleDateString())
                    }}/>
                </div>
                <div className="w-[200px]">
                    <input
                        className="appearance-none rounded-full w-full px-4 py-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                        type="text"
                        id="nome"
                        placeholder="Nome e Cognome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="w-[200px]">
                    <input
                        className="appearance-none rounded-full w-full px-4 py-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                        type="text"
                        id="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
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
                        PRENOTA UN APPUNTAMENTO

                    </button>

                </div>
            </div>

            <div className="bg-primary w-full xl:hidden md:px-20 py-8">
                {/*<h2 className="text-white text-2xl text-center mt-48 sm:mt-16">Prenota un appuntamento</h2>*/}



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="m-auto">
                        <MySelect options={options}
                                  classNameButton="rounded-full p-3 w-[300px]" backgroundColor="#6b84c7"
                                  textColor="#264193" backgroundOptionColor="#6b84c7"
                                  backgroundColorOptionsContainer="#e1edff"
                                  placeholder="Seleziona un servizio"
                                  onChange={(e) => setService(e.value)}
                                  defaultValues={servizioSelezionatoDefault}
                        />
                    </div>
                    <div className="w-[300px] m-auto">
                        <DatePicker
                            className="rounded-full w-full p-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                            selected={startDate} onChange={(date: Date) => {
                            setStartDate(date)
                            setDataPrenotazione(date.toLocaleDateString())
                        }}/>
                    </div>
                    <div className="w-[300px] m-auto">
                        <input
                            className="appearance-none rounded-full w-full p-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                            type="text"
                            id="nome"
                            placeholder="Nome e Cognome"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-[300px] m-auto">
                        <input
                            className="appearance-none rounded-full w-full p-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                            type="text"
                            id="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-[300px] sm:col-span-2 m-auto">
                        <button
                            className='px-8 py-3 w-full rounded-full bg-secondary text-white text-[15px] font-bold mr-7 hover:opacity-80'
                            onClick={() => {
                                console.log(service, startDate.toLocaleDateString(), name)
                                inviaEmail()
                            }}
                        >
                            PRENOTA UN APPUNTAMENTO
                        </button>
                    </div>
                </div>
            </div>

            {emailInviata === 'inviata' &&
                <div className="animate-pulse bg-indigo-300 relative  border-l-4 border-indigo-500 text-secondary p-5 mt-10 w-1/3 m-auto" role="alert">
                    <p className="font-bold">Richiesta prenotazione</p>
                    <p>Richiesta inviata correttamente. Cercheremo di contattarla al più presto.</p>
                    <span className="flex h-5 w-5 absolute right-2 top-1">
                        <FaRegCheckCircle size={25} color="#264193"/>
                    </span>
                </div>
            }
            {emailInviata === 'errore' &&
                <div className="animate-pulse bg-red-300 relative  border-l-4 border-red-500 text-red-700 p-5 mt-10 w-1/3 m-auto" role="alert">
                    <p className="font-bold">Richiesta prenotazione</p>
                    <p>Richiesta NON inviata correttamente. Riprovare.</p>
                </div>
            }

        </div>
    )

}