import {NextApiRequest, NextApiResponse} from "next";
import {SMTPClient} from "emailjs";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const client = new SMTPClient({
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PSW,
        host: process.env.EMAIL_HOST,
        port: 465,
        ssl: true
    })

    try {

        const message = {
            text: req.body.servizio + " | Inviato Da: " + req.body.numero,
            from: 'fisioste.it',
            to: process.env.EMAIL_USER as string,
            subject: `Messaggio Da ${req.body.name}`,
            attachment: [
                {
                    data: `<div>
                            <b>Servizio Scelto : </b> <span>${req.body.servizio}</span><br>
                            <b>Nome e Cognome : </b> <span>${req.body.name}</span><br>
                            <b>Data : </b> <span>${req.body.data}</span><br>
                         </div>
                         <p>Numero Telefonico: ${req.body.numero}</p>`, alternative: true
                },
            ],
        };

        await client.sendAsync(message)

        res.status(200).json({messaggio: "Email Inviata"})

    } catch (e) {
        res.status(500).json({errore: "Email Non Inviata"})
    }
}