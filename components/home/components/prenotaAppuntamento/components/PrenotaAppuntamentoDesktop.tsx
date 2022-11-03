import React from 'react';
import {MySelect} from "../../../../shared/MySelect";
import DatePicker from "react-datepicker";

interface PrenotaAppuntamentoDesktopProps {
    options: { id: number, value: string }[],
    setService: (e: string) => void,
    startDate: Date,
    setStartDate: (d: Date) => void,
    setDataPrenotazione: (d: string) => void,
    setName: (n: string) => void,
    setEmail: (e: string) => void,
    email: string
    setEmailError: (e: boolean) => void,
    emailError: boolean,
    loading: boolean,
    inviaEmail: () => void,
    numero: string,
    setNumero: (n:string) => void
}

export const PrenotaAppuntamentoDesktop: React.FC<PrenotaAppuntamentoDesktopProps> = (
    {
        options, setService, startDate, setStartDate, setDataPrenotazione, setName, setEmail,
        email, setEmailError, emailError, loading, inviaEmail, numero, setNumero
    }
) => {
    return(
        <div
            className=" bg-primary container hidden xl:flex xl:justify-around m-auto h-[110px] w-full px-8 rounded-full items-center"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-once="true"
        >
            <MySelect options={options}
                      classNameContainer="w-[200px]" classNameButton="rounded-full px-4 py-3" backgroundColor="#6b84c7"
                      textColor="#264193" backgroundOptionColor="#6b84c7" backgroundColorOptionsContainer="#e1edff"
                      placeholder="Seleziona un servizio"
                      onChange={(e) => setService(e.value)}
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
                    type="number"
                    id="number"
                    placeholder="Numero Tel."
                    onChange={(e) => setNumero(e.target.value)}
                />
                {/*<input
                    className="appearance-none rounded-full w-full px-4 py-3 text-[14px] bg-[#6b84c7] text-white focus:outline-none"
                    type="text"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => {
                        if(e.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)){
                            setEmailError(false)
                            setEmail(e.target.value)
                        }else{
                            setEmailError(true)
                        }

                    }}
                />
                {emailError && <p className="text-red-300">Email Non Valida!</p>}*/}

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
                        (numero !== "") && inviaEmail()
                    }}
                >
                    PRENOTA UN APPUNTAMENTO

                </button>

            </div>
        </div>
    )

}