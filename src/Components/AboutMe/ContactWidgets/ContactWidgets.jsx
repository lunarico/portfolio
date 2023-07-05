import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageContext from '../../../Context/LanguageContext';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React, { useContext } from 'react';

export const ContactWidgets = () => {

    const { trans, language } = useContext(LanguageContext);

    return (
        <div className='contact animate__animated animate__fadeInLeft'>
            
                <a href='https://github.com/lunarico' target='_blank'><i><GitHubIcon/></i></a>
                <a href='https://www.linkedin.com/in/luna-rico/' target='_blank'><i className='linkedin'><LinkedInIcon/></i></a>
                <a href="mailto:lunarico93@gmail.com"><i><MailOutlineIcon/></i></a>
           
            <button>
                <a href= {language == 'es' ? "./Cv Luna Rico.pdf" : "./Resume Luna Rico.pdf"} download>{trans.resume}</a>
            </button>
        </div>
    )
}