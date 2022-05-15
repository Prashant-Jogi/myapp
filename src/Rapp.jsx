import React, { useState } from "react";
import Rshow from "./Rshow";
import './rapp.css';


const Rapp =() =>{
  const [Data,setData] = useState();
  const [SwData,setSwData] = useState({
    Name:'',
    Date:'',
    Email:'',
    TextArea:'',
  });
  const ev = (e) =>{
    setData(e.target.value);
  }
  const set = (es) =>{
      console.log(es.target.value);
  }
  return<>
          <div className="main_div">
            <div className="center_div">
                <h1>Resume</h1>
                <ul>
                  <li><input type='text' name="name" onChange={ev} placeholder="Name"/></li>
                  <li><input type='date' name="date" onChange={ev} placeholder='BirthDate'/></li>
                  <li><input type="email" name="email" onChange={ev} placeholder="Email"/></li>
                  <li><input type='textarea' name="about" onChange={ev} placeholder="About"/></li>

                </ul>
                <button type="submit" onClick={set}>Submit</button>
            </div>
          </div>
  </>
}

export default Rapp;
