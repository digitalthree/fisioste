import mailchimp from '@mailchimp/mailchimp_marketing';
import {NextApiRequest, NextApiResponse} from "next";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID as string, {
            email_address: email,
            status: 'subscribed'
        });

        return res.status(201).json({ error: '' });
    } catch (error) {
        console.log(process.env.MAILCHIMP_AUDIENCE_ID)
        return res.status(500).json({ error: 'errore'});
    }
};
