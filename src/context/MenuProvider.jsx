import React, { useState } from 'react';
import { MenuContext } from './MenuContext';

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(prev => !prev);

  return (
    <MenuContext.Provider value={{ menu, setMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
