import React from 'react';
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";

interface FooterBannerProps {
}

export const FooterBanner: React.FC<FooterBannerProps> = ({}) => {
    return(
        <div className="container m-auto">
            <div className="flex lg:flex-row flex-col rounded-3xl p-1 lg:p-0 lg:rounded-full bg-white">
                <div className="lg:border-r lg:border-gray-400">
                    <div className="flex justify-center items-center py-3 px-6 lg:py-6 lg:px-8">
                        <Image src={'/img/Fisioste_Logo.webp'} width="120px" height="120px" layout="intrinsic" alt="Fisioste Logo"/>
                        <Image src={'/img/home/Fiosioste_Font.webp'} width="277px" height="62px" layout="intrinsic" alt="Fisioste Logo"/>
                    </div>
                </div>
                <div className="flex flex-col px-6 items-center lg:flex-row lg:justify-between lg:items-center lg:px-12 w-full">
                    <p className="text-lg font-normal border-b-2 pb-4 border-gray-200 lg:border-0 lg:pb-0 lg:text-2xl lg:font-light">Un team di esperti al <span className="text-secondary">vostro serizio</span></p>
                    <div className="flex w-3/4 lg:w-1/3 py-6 lg:py-4 lg:pl-8 justify-between lg:justify-between">
                        <a href="https://www.facebook.com/fisioste" target="_blank"rel="noreferrer">
                            <FaFacebookF size="30px" color="#283f92"
                                         className="hover:cursor-pointer hover:opacity-50"
                            />
                        </a>

                        <a href="https://www.instagram.com/fisioste/" target="_blank" rel="noreferrer">
                            <FaInstagram size="30px" color="#283f92" className="hover:cursor-pointer hover:opacity-50"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCMDmGkclhs1CWlWe5G3ukbw/featured" target="_blank" rel="noreferrer">
                            <FaYoutube size="30px" color="#283f92" className="hover:cursor-pointer hover:opacity-50"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}