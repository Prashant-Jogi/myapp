import React,{useContext} from 'react';
import { FirstName } from './NewApp';
const Context = () =>{
  const fname = useContext(FirstName);
  return<>
    <h1>this is {fname}</h1>

  </>
  }

export default Context;
