import React from 'react';

interface CampiElettromagneticiProps {
}

export const CampiElettromagnetici: React.FC<CampiElettromagneticiProps> = ({}) => {
    return (
        <>
            <p className="text-[18px]">
                La tecnologia con campi elettromagnetici genera un intenso campo elettromagnetico che bypassa il sistema
                nervoso centrale e periferico stimolando, così, direttamente i motoneuroni che innervano i muscoli
                permettendo una contrazione muscolare completa senza necessità di contatto.
            </p>
            <p className="text-[18px]">
                Le contrazioni coinvolgono il muscolo in profondità e questo comporta un’azione simultanea su tutte le
                fibre muscolari nell’area trattata.
            </p>
            <p className="text-[18px]">
                Nella fisioterapia estetica questo trattamento viene impiegato nel trattamento di:
            </p>
            <ul className="list-disc px-10">
                <li>Lipolisi</li>
                <li>Rinnovo cellulare</li>
                <li>Aumento del tono muscolare</li>
                <li>Riabilitazione del pavimento pelvico e trattamento per l’incontinenza</li>
            </ul>
            <p className="text-[18px]">
                ma anche in:
            </p>
            <ul className="list-disc px-10">
                <li>Mobilizzazione articolare</li>
                <li>Guarigione delle fratture</li>
                <li>Sollievo dal dolore cronico o acuto</li>
            </ul>

            <video className="mt-10" width="350" height="300" controls >
                <source src="/video/Video-campi.mp4" type="video/mp4"/>
            </video>
        </>
    )

}