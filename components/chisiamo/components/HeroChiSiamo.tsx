import React from 'react';

interface HeroChiSiamoProps {
}

export const HeroChiSiamo: React.FC<HeroChiSiamoProps> = ({}) => {
    return(
        <>
            <div
                className="h-[48vh] lg:h-[40vh] bg-gradient-to-t from-white to-[#d8e8ff] hidden md:flex justify-start bg-no-repeat"
                style={{
                    backgroundImage: "url('/img/chisiamo/team.png')",
                    backgroundSize: "contain",
                    backgroundPositionX: '50%'
                }}
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">Il Nostro </span>Team</h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        Lorem ipsum dolor sit amet.
                    </h2>
                </div>
            </div>


            <div className="h-[48vh] md:hidden lg:h-[55vh] p-2 flex justify-start bg-no-repeat bg-auto"
                 style={{
                     backgroundImage: "url('/img/chisiamo/team_mobile.png')",
                     backgroundSize: "cover",
                     backgroundPositionX: "-100px"
                 }}
                 data-aos="fade-in"
                 data-aos-duration="2000"
                 data-aos-once="true"
            >
                <div className="container m-auto">
                    <h1 className="text-secondary"><span className="text-black">Il Nostro </span>Team</h1>
                    <hr className="border border-secondary w-[200px] mt-2 mb-4"/>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h2>
                </div>
            </div>
        </>
    )

}