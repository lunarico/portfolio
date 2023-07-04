import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguageContext from '../../Context/LanguageContext';
import { Link } from 'react-scroll';
import React, { useState, useEffect, useContext } from 'react';

export const NavBar = () => {

    const { trans, language, setLanguage } = useContext(LanguageContext);

    const linkNames = ["aboutMe", "skills", "projects", "experience", "certificates"];
    const buttonLanguages = ["es", "en"]

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [icon, setIcon] = useState(faBars);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIcon(isMenuOpen ? faBars : faTimes);
    };

    return (
        <nav className={`nav-bar ${isMenuOpen ? 'menu-active' : ''}`}>
            <ul>
                {linkNames.map((link) => (
                    <li key={link}>
                        <Link to={link} spy={true} smooth={true} offset={-100} duration={500}
                            onClick={toggleMenu}>
                            {trans[link]}
                        </Link>
                    </li>
                ))}
            </ul>
            <div id="languages" className={isMenuOpen ? 'lang-none' : ''}>
                {buttonLanguages.map ((lang) => (
                    <button className={language === lang ? 'bActive' : ''} key={lang}
                            onClick={() => setLanguage(lang)}>
                            {lang}
                    </button>
                ))}
            </div>
            <FontAwesomeIcon icon={icon} className="btn-menu" onClick={toggleMenu}/>
        </nav> 
    )
} 