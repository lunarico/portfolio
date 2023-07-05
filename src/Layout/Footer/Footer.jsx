
import LanguageContext from '../../Context/LanguageContext';
import React, { useContext } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';

export const Footer = () => {

    const { trans } = useContext(LanguageContext);

    const linkNames = ["aboutMe", "skills", "projects", "experience", "certificates"];

    return (
        <section id="footer">
            <div className='contact-footer'>
                <nav className='nav-footer'>
                    <ul>
                        {linkNames.map ((link) => 
                            <li><a href={`#${link}`}>{trans[link]}</a></li>)}
                    </ul>
                </nav>
                <div className="icons-footer">
                    <a href='https://github.com/lunarico' target='_blank'><i><GitHubIcon/></i></a>
                    <a href='https://www.linkedin.com/in/luna-rico/' target='_blank'><i className='linkedin'><LinkedInIcon/></i></a>
                    <a href="mailto:lunarico93@gmail.com"><i><MailOutlineIcon/></i></a>
                </div>
                <div className='information-footer'>
                    <span>
                        <i><PlaceIcon/></i>
                        <p>Capital Federal, Buenos Aires, Argentina.</p>
                    </span>

                    <span>
                        <i><MailOutlineIcon/></i>
                        <p>lunarico93@gmail.com</p>
                    </span>
                </div>
            </div>
            <div className='copy-footer'>
                <p>{trans.footerOne}</p>
                <p>{trans.footerTwo}</p>
            </div>
        </section>
    )
}