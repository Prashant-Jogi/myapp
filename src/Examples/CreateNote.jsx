import React,{useState} from 'react';


const CreateNote = (props) => {
  const [note,setNote] = useState({
    title:'',
    content:''
  });

  const inputEvent = (event) =>{
    const {name,value} = event.target;
      setNote((prev)=>{
        return{
          ...prev,
          [name]:value,
        };
      });
  };
  const addEvent = () =>{

    props.passnote(note);
  }
  return<>
  <form>
  <input  type='text' name='title' value={note.title} onChange={inputEvent} placeholder='title'/>
  <textarea rows='' colums='' name='content' value={note.content} onChange={inputEvent} placeholder='Enter Here...'></textarea>
  <button onClick={addEvent}>+</button>
  </form>
  </>
}
export default CreateNote;
