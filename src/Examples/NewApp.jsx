import React, { createContext } from 'react';
import Context from './Context';

const FirstName = createContext();

const NewApp = () => {
  return <>
    <FirstName.Provider value={'Marvel'}>
      <Context />
    </FirstName.Provider>
  </>
}
export default NewApp;
export { FirstName };
