import { createContext, useState } from 'react';

const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  // Defina o estado ou dados que deseja compartilhar no contexto
  const [homeComponent, setHomeComponent] = useState('');

  return (
    <HomeContext.Provider value={{ homeComponent, setHomeComponent }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeContextProvider };
