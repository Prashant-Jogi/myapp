import React,{useState} from "react";
import {ques} from './Sdata';
import MyAccordion from "./MyAccordion";
const NewTodoList =() =>{
  const [data,setdata] = useState(ques);
return<>
  <h1>Todo List</h1>
  <section>
  <h1>Movie List</h1>
  {

  data.map((crn) =>{
      const {id} = crn

      return <MyAccordion key ={id} {...crn} />
      })

  }
  </section>
</>
}

export default NewTodoList;
