import AOS from 'aos';
import 'aos/dist/aos.css';
import LanguageContext from '../../Context/LanguageContext';
import React, { useContext, useEffect } from 'react';

 export const Experience = () => {

    const { trans } = useContext(LanguageContext);

    useEffect(() => {
      AOS.init({ offset: 200 });
    }, []);

    const experiences = [
      {
        title: trans.webDev,
        company: 'Freelancer',
        dates: trans.devDate,
        description: trans.devDescription
      },
      {
        title: trans.webMentor,
        company: 'Coderhouse',
        dates: trans.mentorDate,
        description: trans.mentorDescription
      }
    ];

     return (
         <section id="experience">
             <h2>{trans.experience}</h2>
             <div className='experience-container' data-aos="flip-up">
              {experiences.map ((exp) => 
                <div className='experience-card'>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company} | 
                    <span className='experience-date'> {exp.dates}</span>
                  </h4>
                  <p>{exp.description}</p>
                </div>
              )}
             </div>
        </section>)
}