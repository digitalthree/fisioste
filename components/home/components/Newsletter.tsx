import React, {useState} from 'react';

interface NewsletterProps {
}

export const Newsletter: React.FC<NewsletterProps> = ({}) => {

    const [email, setEmail] = useState('');

    const iscrizioneNewsletter = async () => {

        // 3. Send a request to our API with the user's email address.
        const res = await fetch('/api/iscrizioneNewsletter', {
            body: JSON.stringify({
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error } = await res.json();

        if (error) {
            console.log(error)

            return;
        }
        setEmail('')
        alert('Iscrizione effettuata! 🎉 Grazie per esserti iscritto alla nostra newsletter!')
    };


    return(

            <div className="container m-auto text-center py-20"
                 data-aos="zoom-in"
                 data-aos-duration="1500"
                 data-aos-once="true"
            >
                <div>
                    <h1 className="mb-2">Iscriviti all <span className="text-secondary">newsletter</span></h1>
                    <hr className="border border-secondary w-[100px] m-auto mb-2"/>
                    <h2>
                        Resta costantemente aggiornato sulle nuove tecniche e metodologie.<br/>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Puoi annullare l'iscrizione in qualsiasi momento.
                    </h2>

                    <div className="flex-col sm:flex sm:flex-row sm:justify-center pt-12 sm:pt-36">
                        <div className="w-full sm:w-[350px] mb-6 sm:mb-0 sm:mr-10">
                            <input className="appearance-none rounded-full w-full px-8 py-3 text-sm bg-[#e8e8e8] text-secondary focus:outline-none"
                                   type="text"
                                   id="newsletter"
                                   placeholder="la tua mail"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className='px-8 py-3 sm:w-[250px] w-full rounded-full bg-secondary text-white mr-7 hover:opacity-80 font-bold'
                                    onClick={iscrizioneNewsletter}
                            >
                                ISCRIVITI
                            </button>
                        </div>
                    </div>

                </div>
            </div>
    )

}