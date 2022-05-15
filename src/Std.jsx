import React from 'react';
import './std.css'
const Std = ({children}) =>{
  console.log({children})
  return<div className='std'>{children}</div>;
}

export default Std;
