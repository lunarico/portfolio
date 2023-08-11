import AOS from 'aos';
import 'aos/dist/aos.css';
import LanguageContext from '../../Context/LanguageContext';
import React, { useContext, useEffect } from "react";

import flyAndBuy from "../../assets/projects/flyAndBuy.png"
import indigoClima from "../../assets/projects/indigoClima.png"
import katmandu from "../../assets/projects/katmandu.png"
import miComunicacion from "../../assets/projects/miComunicacion.png"

export const Projects = () => {

    const { trans } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init({ offset: 200 });
      }, []);


    const slides =  [

        {title: 'Fly and Buy',
        type: trans.realP,
        description: trans.projectDescriptionFly,
        link: 'https://flyandbuy2.netlify.app/',
        image: flyAndBuy,
        id: 1,}
    ,
        {title: 'Katmandú',
        type: trans.fictionP,
        description: trans.projectDescriptionKat,
        link: 'https://katmandu.netlify.app/',
        image: katmandu,
        id: 2}
    ,
        {title: 'Mi Comunicación',
        type: trans.fictionP,
        description: trans.projectDescriptionMic,
        link: 'https://lunarico.github.io/mi-comunicacion/',
        image: miComunicacion,
        id: 3}
    ,
       { title: 'Indigo Clima',
        type: trans.realP,
        description: trans.projectDescriptionInd,
        link: 'https://www.indigoclima.com.ar/',
        image: indigoClima,
        id: 4}
    ]

  return (

    <section id="projects">
        <h2>{trans.myProjects}</h2>
        <div className="cards-container">
            {slides.map ((slide) =>
                <div className="project-card" data-aos="zoom-in">
                    <img src={slide.image} alt={slide.title}/>
                    <div className="cardHover">
                        <h3>{slide.title}</h3>
                        <h4>{slide.type}</h4>
                        <p>{slide.description}</p>
                        <button>
                            <a href={slide.link} target='_blank'>{trans.visit}</a>
                        </button>
                    </div>
                </div>
            )}
        </div> 
    </section>
  );
};