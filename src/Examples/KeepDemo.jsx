import React ,{useState}from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const KeepDemo = () =>{
  const [Item,setItem] = useState([]);

  const AddNote = (note) =>{

    setItem((prev)=>{
      return[...prev,note];
    });
  }
 return<>
    <Header/>
    <CreateNote passnote={AddNote}/>

    {Item.map((val,index)=>{
      return (<Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
      />
      );
    })}
    <Footer/>
  </>
}
export default KeepDemo;
