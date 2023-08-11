import AOS from 'aos';
import 'aos/dist/aos.css';
import LanguageContext from '../../Context/LanguageContext';
import React, { useContext, useEffect } from 'react';

import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import js from '../../assets/icons/js.png'
import react from '../../assets/icons/react.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import tailwind from '../../assets/icons/tailwind.png'
import sass from '../../assets/icons/sass.png'
import git from '../../assets/icons/git.png'
import github from '../../assets/icons/github.png'
import node from '../../assets/icons/node.png'
import firebase from '../../assets/icons/firebase.png'
import photoshop from '../../assets/icons/photoshop.png'
import illustrator from '../../assets/icons/illustrator.png'

export const Skills= () => {
    
    const { trans } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init({ offset: 200 });
      }, []);

    const icons = [
        {img: html,
        name: 'html'},
        {img: css,
        name: 'css'},
        {img: js,
        name: 'javascript'},
        {img: react,
        name: "react.js"},
        {img: bootstrap,
        name: 'bootstrap'},
        {img: tailwind,
        name: 'tailwind'},
        {img: sass,
        name: 'sass'},
        {img: git,
        name: 'git'},
        {img: github,
        name: 'github'},
        {img: firebase,
        name: 'firebase'},
        {img: photoshop,
        name: 'photoshop'},
        {img: illustrator,
        name: 'illustrator'}
    ];

    return (
        <section id="skills" data-aos="fade-up">
            <h2>{trans.skills}</h2>
            <div className="skills-container">
                {icons.map ((icon) => 
                    <div className="icon-container">
                        <img src={icon.img} className="icon" data-aos="flip-right" alt={icon.name}></img>
                         <h3 className="icon-name">{icon.name}</h3>
                    </div>
                )}
            </div>    
       </section>)
}