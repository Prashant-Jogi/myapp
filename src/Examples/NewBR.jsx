import React from "react";
import Note from './Note'
import MyAccordion from "./MyAccordion";
import { BrowserRouter } from "react-router-dom";
const NewBR = () =>{
  return<>
      <BrowserRouter>
        <Note/>
        <MyAccordion/>
      </BrowserRouter>
  </>
}
export default NewBR;
