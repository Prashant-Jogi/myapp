import React from 'react'
import Std1 from './Std1'
import Std from './Std'
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
const Outer = () =>{
  return <><Std>
    {
      btnValues.flat().map((btn,i)=>{
        return(
          <Std1 key={i} value={btn}/>
        );
      })
    }

  </Std>
  </>
}
export default Outer;
