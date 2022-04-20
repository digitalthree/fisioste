import {NextApiRequest, NextApiResponse} from "next";
import {Servizio} from "./index";
import {servizi} from "../../../data/servizi";

export default function handler(req: NextApiRequest, res: NextApiResponse<Servizio | {messaggio: string}>) {
    const { id } = req.query

    let serviziFiltrati = servizi.filter(serizio => serizio.id === parseInt(id as string))

    if(serviziFiltrati.length > 0){
        res.status(200).json(serviziFiltrati[0])
    }else{
        res.status(404).json({messaggio: 'Servizio non esistente'})
    }
}

export async function fetchServizo(id: number) {
    let servizio = servizi.filter(s => s.id === id)[0]
    if(servizio){
        return servizio
    }
}