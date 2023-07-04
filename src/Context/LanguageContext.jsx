import React from 'react';

const LanguageContext = React.createContext({
  language: 'es',
  setLanguage: () => {},
});

export default LanguageContext;