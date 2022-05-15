import React,{useState} from 'react';
//import Sdata from './Sdata';


const Card =()=>{
    let [count,setCount] = useState(0);
    const incre = () =>{
      setCount(count+1);
    }
    const decre= () =>{
      setCount(()=>{
        if(count>0){
         return count-1
        }else{
          alert('sorry, you reached zero limit')
        }
      })
    }

    return <>
       <h1>{count}</h1>
       <button onClick={incre}>increment</button>
       <button onClick={decre}>decrement</button>
        </>
};

export default Card;
