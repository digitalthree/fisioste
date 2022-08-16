import React, {useState} from 'react';
import Image from "next/image";
import {TeamMember} from "../../../data/team";
import {FaTimes} from "react-icons/fa";

interface TeamCardsProps {
    team: TeamMember[]
}

export const TeamCards: React.FC<TeamCardsProps> = ({team}) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(team[0]);

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 container m-auto py-20">
            {team.map(member => {
                return(
                    <div key={member.id} className="flex flex-col justify-between  rounded-xl bg-[#d8e8ff] shadow-xl items-center"
                         data-aos="zoom-in"
                         data-aos-duration="2000"
                         data-aos-once="true"
                         data-aos-delay={member.id * 300}
                    >
                        <div className="bg-gradient-to-t from-[#d8e8ff] to-white">
                            <Image src={member.imgUrl} width="600" height="600" layout="intrinsic"/>
                        </div>
                        <div className="flex flex-col p-3">
                            <p className="text-menuText">{member.professione}</p>
                            <h2 className="text-secondary">{member.nome}</h2>
                            <hr className="border border-secondary w-[50px] mt-2 mb-2"/>
                            <p className="text-secondary">
                                {member.bio.substring(0, 250)+'...'}
                            </p>
                            <button className="rounded-full border-2 border-secondary mt-4 text-secondary py-1"
                                    onClick={() => {
                                        setSelectedMember(member)
                                        setShowModal(!showModal)
                                    }}
                            >
                                LEGGI LA BIO COMPLETA
                            </button>
                        </div>
                    </div>
                )
            })}
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-[350px] sm:max-w-xl xl:max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl text-secondary font-semibold">
                                        {selectedMember.nome}
                                    </h3>
                                    <FaTimes
                                        color="#c7d2fe"
                                        className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                    </FaTimes>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto h-[400px] overflow-scroll lg:h-full lg:overflow-hidden">
                                    <p className="text-slate-500 text-lg text-secondary leading-relaxed">
                                        {selectedMember.specializzazioni.length > 0 &&
                                            <div>
                                                <h3>SPECIALIZZAZIONI:</h3>
                                                <ul className="list-disc ml-10">
                                                    {selectedMember.specializzazioni.map(s => {
                                                        return <li key={s}>{s}</li>
                                                    })}
                                                </ul>
                                                <hr className="mt-5 mb-5"/>

                                            </div>
                                        }

                                        {selectedMember.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )

}