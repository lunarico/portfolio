import React, { useState, useEffect } from 'react';
import LanguageContext from './LanguageContext';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [trans, setTrans] = useState('es');

  useEffect(() => {
    import(`../Languages/${language}.jsx`).then((translationModule) => {
      setTrans(translationModule.default);
    });
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, trans }}>
      {children}
    </LanguageContext.Provider>
  );
};