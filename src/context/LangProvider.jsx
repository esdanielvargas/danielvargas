import { useState } from 'react';
import { LangContext } from './LangContext';

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(false);

  const toggleLang = () => setLang(prev => !prev);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
