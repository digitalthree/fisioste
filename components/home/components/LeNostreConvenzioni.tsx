import React from 'react';
import Image from 'next/image'

interface LeNostreConvenzioniProps {
}

export const LeNostreConvenzioni: React.FC<LeNostreConvenzioniProps> = ({}) => {
    return(
        <>
            <div className="container m-auto flex py-32 flex-col items-center text-center">
                <div
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h1 className="mb-2">Le nostre <span className="text-secondary">convenzioni</span></h1>
                    <hr className="border border-gray-600 w-[100px] mb-5"/>
                    <h2>
                        Il nostro elenco è in continuo aggiornamento, per maggiori info
                        chiamaci oppure scrivici.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 mt-14 md:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-24 md:lg-24"
                     data-aos="slide-up"
                     data-aos-duration="2000"
                     data-aos-once="true"
                >
                    <div>
                        <Image src={'/img/home/fasiil.png'} width="250px" height="150px" layout="intrinsic" alt="Fisioste Convenzione 1"/>
                    </div>
                    <div>
                        <Image src={'/img/home/fasiil.png'} width="250px" height="150px" layout="intrinsic" alt="Fisioste Convenzione 2"/>
                    </div>
                    <div>
                        <Image src={'/img/home/fasiil.png'} width="250px" height="150px" layout="intrinsic" alt="Fisioste Convenzione 3"/>
                    </div>
                    <div>
                        <Image src={'/img/home/fasiil.png'} width="250px" height="150px" layout="intrinsic" alt="Fisioste Convenzione 4"/>
                    </div>
                    <div>
                        <Image src={'/img/home/fasiil.png'} width="250px" height="150px" layout="intrinsic" alt="Fisioste Convenzione 5"/>
                    </div>
                    <div>
                        <Image src={'/img/home/fasiil.png'} width="250px" height="150px" layout="intrinsic" alt="Fisioste Convenzione 6"/>
                    </div>

                </div>
            </div>
        </>
    )

}