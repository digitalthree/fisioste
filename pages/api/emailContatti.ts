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
            text: " | Inviato Da: " + req.body.email,
            from: req.body.email,
            to: process.env.EMAIL_USER as string,
            subject: `Messaggio Da ${req.body.nome}`,
            attachment: [
                {
                    data: `<div>
                            <b>Nome e Cognome : </b> <span>${req.body.nome}</span><br>
                            <b>Email : </b> <span>${req.body.email}</span><br>
                            <b>Telefono : </b> <span>${req.body.telefono}</span><br>
                            <b>Messaggio : </b> <span>${req.body.messaggio}</span><br>
                         </div>
                         <p>Inviato Da: ${req.body.email}</p>`, alternative: true
                },
            ],
        };

        await client.sendAsync(message)

        res.status(200).json({messaggio: "Email Inviata"})

    } catch (e) {
        res.status(500).json({errore: "Email Non Inviata"})
    }
}