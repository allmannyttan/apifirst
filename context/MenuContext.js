import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const updateMenuStatus = (newStatus) => {
    setMenuStatus(newStatus);
  };
  return (
    <MenuContext.Provider value={{ menuStatus, updateMenuStatus }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
