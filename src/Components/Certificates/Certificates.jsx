import React, { useRef, useContext, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LanguageContext from '../../Context/LanguageContext';
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';

import front from "../../assets/certificates/front.png";
import dw from "../../assets/certificates/dw.png";
import js from "../../assets/certificates/js.png";
import react from "../../assets/certificates/react.png";
import intro from "../../assets/certificates/intro.png";
import uxui from "../../assets/certificates/uxui.png"

import '../Certificates/_certificates.scss';

export const Certificates = () => {

    const { trans } = useContext(LanguageContext);

    const certificates =  [
        {img: uxui, description: trans.certificateUxui},
        {img: front, description: trans.certificateFront},
        {img: react, description: trans.certificateReact},
        {img: js, description: trans.certificateJs},
        {img: dw, description: trans.certificateDev},
        {img: intro,description: trans.certificateIntro}
    ]

    const [isCertOpen, setIsCertOpen] = useState(false)
    const [certContent, setCertContent] = useState([])
    const imgRef = useRef(null);

    const openCert = (cer) => {
        setCertContent([cer])
        setIsCertOpen(true)
    }

    useEffect(() => {
        const clickOutside = (event) => {
          if (imgRef.current && !imgRef.current.contains(event.target)) {
            setIsCertOpen(false);
          }
        };
        document.addEventListener('mousedown', clickOutside);

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, []);

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
                        <button onClick={() => openCert(cer)}>
                            <img src={cer.img} alt={cer.description}></img>
                        </button>
                    </SwiperSlide>)}
            </Swiper>
            <div className={!isCertOpen ? 'certClose' : "certOpen"}>
                <FontAwesomeIcon icon={faTimes} onClick={() => setIsCertOpen(false)} className='closeCert'/>
                {certContent.map ((cert) => <img ref={imgRef} src={cert.img} className='imgCertOpen' alt={cert.description}></img>)}
            </div>
        </section>
    )
}