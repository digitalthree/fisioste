import React, {useState} from 'react';
import {MySelect} from "../../../shared/MySelect";
import DatePicker from "react-datepicker";
import Image from "next/image";
import {FaRegCheckCircle} from "react-icons/fa";
import {Servizio} from "../../../../pages/api/servizi";
import {useForm} from "react-hook-form";
import {PrenotaAppuntamentoDesktop} from "./components/PrenotaAppuntamentoDesktop";
import {PrenotaAppuntamentoMobile} from "./components/PrenotaAppuntamentoMobile";
import {NotificaInvioEmail} from "./components/NotificaInvioEmail";

interface PrenotaAppuntamentoProps {
    servizi: Servizio[],
    backgroundColor?: string,
}

export const PrenotaAppuntamento: React.FC<PrenotaAppuntamentoProps> = (
    {
        servizi, backgroundColor
    }
) => {

    let options: { id: number, value: string }[] = []

    servizi.forEach(servizio => {
        options.push({id: servizio.id, value: servizio.name})
    })


    const [startDate, setStartDate] = useState(new Date());
    const [dataPrenotazione, setDataPrenotazione] = useState(new Date().toLocaleDateString());
    const [name, setName] = useState('');
    const [numero, setNumero] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [service, setService] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailInviata, setEmailInviata] = useState<'inviata' | 'errore' | 'standby'>('standby');


    const inviaEmail = async () => {
        setLoading(true)
        try {
            let data = {
                name: name,
                numero: numero,
                servizio: service,
                data: dataPrenotazione
            }
            await fetch('/api/emailPrenotazione', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
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

            <PrenotaAppuntamentoDesktop options={options} setService={setService} startDate={startDate}
                                        setStartDate={setStartDate} setDataPrenotazione={setDataPrenotazione}
                                        setName={setName} setEmail={setEmail} email={email} setEmailError={setEmailError}
                                        emailError={emailError} loading={loading} inviaEmail={inviaEmail} numero={numero} setNumero={setNumero}
            />

            <PrenotaAppuntamentoMobile options={options} setService={setService} startDate={startDate}
                                        setStartDate={setStartDate} setDataPrenotazione={setDataPrenotazione}
                                        setName={setName} setEmail={setEmail} email={email} setEmailError={setEmailError}
                                        emailError={emailError} loading={loading} inviaEmail={inviaEmail} numero={numero}
                                       setNumero={setNumero}
            />

            <NotificaInvioEmail emailInviata={emailInviata}/>

        </div>
    )

}