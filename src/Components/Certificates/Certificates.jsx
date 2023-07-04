import LanguageContext from '../../Context/LanguageContext';
import React, { useContext, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css"
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';

import front from "../../assets/certificates/front.png"
import dw from "../../assets/certificates/dw.png"
import js from "../../assets/certificates/js.png"
import react from "../../assets/certificates/react.png"

import '../Certificates/_certificates.scss'

export const Certificates = () => {

    const { trans } = useContext(LanguageContext);

    const certificates =  [
        {img: front, 
        description: trans.certificateFront}
        ,
        {img: react,
        description: trans.certificateReact}
        ,
        {img: js,
        description: trans.certificateJs}
        ,
        {img: dw,
        description: trans.certificateDev}
    ]

    const [isCertOpen, setIsCertOpen] = useState(false)
    const [certContent, setCertContent] = useState([])

    const changeContent = (cer) => {
        setCertContent([cer])
        setIsCertOpen(true)
    }

    return (
        <section id="certificates">
            <h2>{trans.certificates}</h2>
            <Swiper
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"> 
                {certificates.map ((cer) => 
                    <SwiperSlide>
                        <button onClick={() => changeContent(cer)}>
                            <img src={cer.img} alt={cer.description}></img>
                        </button>
                    </SwiperSlide>)}
            </Swiper>
            <div className={!isCertOpen ? 'certClose' : "certOpen"}>
                <FontAwesomeIcon icon={faTimes} onClick={() => setIsCertOpen(false)} className='closeCert'/>
                {certContent.map ((cert) => <img src={cert.img} className='imgCertOpen' alt={cert.description}></img>)}
            </div>
        </section>
    )
}
