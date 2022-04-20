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
        <div className="flex flex-col py-16"
             style={{
                 backgroundImage: "url(/img/home/newsletter1.webp)",
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "700px",
                 backgroundPosition: "0 100px"
             }}
        >
            <div className="container m-auto text-center"
                 data-aos="zoom-in"
                 data-aos-duration="1500"
                 data-aos-once="true"
            >
                <div>
                    <h1 className="mb-2">Iscriviti all <span className="text-secondary">newsletter</span></h1>
                    <hr className="border border-secondary w-[100px] m-auto mb-2"/>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h2>

                    <div className="flex-col sm:flex sm:flex-row sm:justify-center py-12 sm:py-36">
                        <div className="w-full sm:w-[350px] mb-6 sm:mb-0 sm:mr-10">
                            <input className="appearance-none rounded-full w-full px-8 py-3 text-xl bg-[#e8e8e8] text-secondary focus:outline-none"
                                   type="text"
                                   placeholder="la tua mail"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className='px-8 py-3 sm:w-[250px] w-full rounded-full bg-secondary text-white mr-7 hover:opacity-80'
                                    onClick={iscrizioneNewsletter}
                            >
                                ISCRIVITI
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}