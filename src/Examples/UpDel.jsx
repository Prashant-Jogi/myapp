import React from 'react';

const UpDel = (props) =>{

 return<>
      <div className='todo_style'>
      <button onClick={()=>{
        props.onSelect(props.id)
        }}>x</button>
      <li>{props.item}</li>
      </div>
  </>
}
export default UpDel;
