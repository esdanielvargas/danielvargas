import { createContext, useContext } from 'react';

// Crear contexto
export const LangContext = createContext();

// Hook personalizado para usarlo desde cualquier componente
export const useLang = () => useContext(LangContext);