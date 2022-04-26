import React from 'react';
import {FaRegCheckCircle} from "react-icons/fa";

interface NotificaInvioEmailProps {
    emailInviata: 'inviata' | 'errore' | 'standby'
}

export const NotificaInvioEmail: React.FC<NotificaInvioEmailProps> = ({emailInviata}) => {
    return(
        <>
            {emailInviata === 'inviata' &&
                <div
                    className="animate-pulse bg-indigo-300 relative  border-l-4 border-indigo-500 text-secondary p-5 mt-10 mx-2 sm:mx-auto sm:w-1/3 m-auto"
                    role="alert">
                    <p className="font-bold">Richiesta prenotazione</p>
                    <p>Richiesta inviata correttamente. Cercheremo di contattarla al più presto.</p>
                    <span className="flex h-5 w-5 absolute right-2 top-1">
                        <FaRegCheckCircle size={25} color="#264193"/>
                    </span>
                </div>
            }
            {emailInviata === 'errore' &&
                <div
                    className="animate-pulse bg-red-300 relative  border-l-4 border-red-500 text-red-700 p-5 mt-10 mx-2 sm:mx-auto sm:w-1/3 m-auto"
                    role="alert">
                    <p className="font-bold">Richiesta prenotazione</p>
                    <p>Richiesta NON inviata correttamente. Riprovare.</p>
                </div>
            }
        </>
    )

}