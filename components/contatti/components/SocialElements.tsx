import React from 'react';
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";

interface SocialElementsProps {
}

export const SocialElements: React.FC<SocialElementsProps> = ({}) => {
    return(
        <div className="grid grid-cols-3 gap-4 mt-10 lg:mt-0 md:gap-16">
            <a  href="https://www.facebook.com/fisioste" target="_blank"rel="noreferrer"
                className="flex flex-col justify-center items-center rounded-2xl border-2 border-secondary p-4 md:p-8 hover:cursor-pointer hover:opacity-60"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <FaFacebookF className="w-[30px] h-[30px] md:w-[80px] md:h-[80px]" color="#264193"/>
                <div className="flex flex-col text-center">
                    <h2 className="md:text-[25px] text-secondary md:mt-4">Facebook</h2>
                </div>
            </a>
            <a  href="https://www.instagram.com/fisioste/" target="_blank" rel="noreferrer"
                className="flex flex-col justify-center items-center rounded-2xl border-2 border-secondary p-4 md:p-8 hover:cursor-pointer hover:opacity-60"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay={250}
            >
                <FaInstagram className="w-[30px] h-[30px] md:w-[80px] md:h-[80px]" color="#264193"/>
                <div className="flex flex-col text-center">
                    <h2 className="md:text-[25px] text-secondary md:mt-4">Instagram</h2>
                </div>
            </a>
            <a  href="https://www.youtube.com/channel/UCMDmGkclhs1CWlWe5G3ukbw/featured" target="_blank" rel="noreferrer"
                className="flex flex-col justify-center items-center rounded-2xl border-2 border-secondary p-4 md:p-8 hover:cursor-pointer hover:opacity-60"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay={500}
            >
                <FaYoutube className="w-[30px] h-[30px] md:w-[80px] md:h-[80px]" color="#264193"/>
                <div className="flex flex-col text-center">
                    <h2 className="md:text-[25px] text-secondary md:mt-4">You Tube</h2>
                </div>
            </a>
        </div>
    )

}