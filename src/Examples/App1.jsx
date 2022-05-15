import React, { useState } from "react";

const App1 = () => {
  const [Data, setData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Mno: ""
  });
 const onEvent = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    
    setData((prev)=>{
      return{
        ...prev,[name]:value
      };
      // if(name==='Fname'){
      //  return{
      //   Fname:value,
      //   Lname:prev.Lname,
      //   Email:prev.Email,
      //   Mno:prev.Mno
      // };
      // }else if(name==='Lname'){
      //   return{
      //    Fname:prev.Fname,
      //    Lname:value,
      //    Email:prev.Email,
      //   Mno:prev.Mno
      //  };
      //  }else if(name==='Email'){
      //   return{
      //    Fname:prev.Fname,
      //    Lname:prev.Lname,
      //    Email:value,
      //   Mno:prev.Mno
      //  };
      //  }else if(name==='Mno'){
      //   return{
      //    Fname:prev.Fname,
      //    Lname:prev.Lname,
      //    Email:prev.Email,
      //   Mno:value
      //  };
      //  }
    });
 }

    let onSubmits = (e) => {
      e.preventDefault();
      alert("Form Submitted");
    };
    return (
      <>
        <form onSubmit={onSubmits}>
          <h1>Hello {Data.Fname}{Data.Lname}
          </h1>
          <p>{Data.Email}</p> 
          <p>{Data.Mno}</p>
          <input
            type="text"
            placeholder="Enter Your First Name"
            onChange={onEvent}
            name="Fname"
            value={Data.Fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={onEvent}
            name="Lname"
            value={Data.Lname}
          />
          <br />
          <input
            type="Email"
            placeholder="Enter Your Emaild Id"
            onChange={onEvent}
            name="Email"
            value={Data.Email}
          />
          <br />
          <input
            type='number'
            placeholder="Enter Your Mobile Number"
            onChange={onEvent}
            name="Mno"
            value={Data.Mno}
          />
           <br />
          <button type='submit'>Submit</button>
        </form>
      </>
    );
        
};
export default App1;
