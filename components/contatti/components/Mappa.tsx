import React from 'react';

interface MappaProps {
}

export const Mappa: React.FC<MappaProps> = ({}) => {
    return(
        <div className="w-full h-[500px]"
             data-aos="zoom-in"
             data-aos-duration="2000"
             data-aos-once="true"
             data-aos-delay={250}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.6499721065093!2d13.71222601546609!3d42.66877237916741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331e7ee58fca7f9%3A0xdb916a89166a4be5!2sCentro%20Fisioterapia%20e%20Osteopatia%20Fisioste%20a%20Teramo!5e0!3m2!1sen!2sit!4v1650017332710!5m2!1sen!2sit"
                className="shadow-xl rounded-xl"
                width="100%" height="100%" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </div>
    )

}