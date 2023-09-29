import AOS from 'aos';
import 'aos/dist/aos.css';
import LanguageContext from '../../Context/LanguageContext';
import React, { useContext, useEffect, useState } from "react";

import flyAndBuy from "../../assets/projects/flyAndBuy.png"
import indigoClima from "../../assets/projects/indigoClima.png"
import katmandu from "../../assets/projects/katmandu.png"
import miComunicacion from "../../assets/projects/miComunicacion.png"
import availa from "../../assets/projects/availa.png"
import { EventAvailableRounded } from '@mui/icons-material';

import {ProjectDetail} from './ProjectDetail'

export const Projects = () => {

    const { trans } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init({ offset: 200 });
      }, []);

    const [subtitle, setSubtitle] = useState(true)
 
    console.log(subtitle)

    const devProjects =  [

        {title: 'Fly and Buy',
        type: trans.realP,
        description: trans.projectDescriptionFly,
        link: 'https://flyandbuyar.com/',
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

    const desProjects = [
        {title: 'Availa',
        type: trans.fictionP,
        description: trans.projectDescriptionAv,
        link: 'https://www.behance.net/gallery/180947207/Availa-Proyecto-Final-Diseno-UXUI',
        image: availa,
        id: 5}
    ]

  return (

    <section id="projects">
        <h2>{trans.myProjects}</h2>
        <div className="projects-title">
            <h3 onClick={() => setSubtitle(true)} className={subtitle ? 'subAccent' : ''}>{trans.developer}</h3>
            <h3 onClick={() => setSubtitle(false)} className={!subtitle ? 'subAccent' : ''}>{trans.designer}</h3>
        </div>
        <div className="cards-container">
            {subtitle ? (
                devProjects.map ((props) =>
                <ProjectDetail project={props} />
            )) : (
                desProjects.map ((props) =>
                <ProjectDetail project={props} />
            ))
        }
        </div> 
    </section>
  );
};