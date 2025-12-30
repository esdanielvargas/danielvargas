import { createContext, useContext } from 'react';

// Crear contexto
export const MenuContext = createContext();

// Hook personalizado para usarlo desde cualquier componente
export const useMenu = () => useContext(MenuContext);