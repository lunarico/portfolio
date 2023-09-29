import LanguageContext from '../../Context/LanguageContext';
import React, { useContext, useEffect, useState } from "react";

export const ProjectDetail = ({project}) => {

    const { trans } = useContext(LanguageContext);

    return (
        <div className="project-card" data-aos="zoom-in">
                    <img src={project.image} alt={project.title}/>
                    <div className="cardHover">
                        <h3>{project.title}</h3>
                        <h4>{project.type}</h4>
                        <p>{project.description}</p>
                        <button>
                            <a href={project.link} target='_blank'>{trans.visit}</a>
                        </button>
                    </div>
                </div> 
    )
}