
import React,{useState} from 'react';
import UpDel from './UpDel'
const NewCrudProject = () =>{
  const [data,setData] = useState("");
  const [udata,setUdata] = useState([]);

  const HE = (e) =>{
    setData(e.target.value);

  }

  const CE = (event) =>{
    setUdata((ev)=>{
      return[...ev,data];
    });

    //setData(" ");
  };
  const del = (de) =>{
    console.log(de)
    setUdata((olditem)=>{
      console.log(olditem)
      return olditem.filter((arrem,ind)=>{
        return ind !== de;
      });
    });
  };



  return<>
     {/*data writing part*/}
    <div className='main_div'>
      <div className='center_div'>
      <h1>ToDoList</h1>
      <input type='text' placeholder='Enter Here' onChange={HE}/>
      <button onClick={CE}>+</button>

      <ol>
      {udata.map((item,index)=>{
        return <UpDel item={item} key={index} id={index} onSelect={del}/>
      })}
      </ol>
      </div>
      </div>
  </>
}
export default NewCrudProject;
