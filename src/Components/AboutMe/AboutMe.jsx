import { ContactWidgets } from './ContactWidgets/ContactWidgets';
import LanguageContext from '../../Context/LanguageContext';
import React, { useContext, useEffect } from 'react';

export const AboutMe = () => {

    const { trans } = useContext(LanguageContext);

    return (
        <section id="aboutMe">
            <div className='presentation'>
                <h3>{trans.hi}</h3>
                <h3>{trans.name}
                    <span className="name" >{trans.luna}</span>
                </h3>
                <h3 className={`${trans.front === "Developer" ? "resalt" : ""}`}>
                    <span className={trans.dev === 'Desarrolladora ' ? "resalt" : 'no-resalt'}>{trans.dev}</span>
                    {trans.front}
                </h3>
                <ContactWidgets/>
            </div>
            <div className='description'>
                <p>{trans.textAbout}</p>
            </div>        
        </section>
    )
}