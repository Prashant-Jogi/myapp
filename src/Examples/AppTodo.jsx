import React,{useState} from 'react';
import TodoList from './TodoList';    
const AppTodo = () => {
    let [Data,setData] = useState('');
    let [OldData,setOldData] = useState([]);
    let onevent = (ev) => {
           setData(ev.target.value);
       }
    let addData = () => {
       setOldData((olditems)=>{
          
        return [...olditems,Data];
           
       }); 
       setData('');
    };  
    // let del = (id) =>{
    //     console.log('deleted')
    //     setOldData((olditems)=>{
    //     return olditems.filter((arrr,index)=>{
    //         return index !== id;
    //     });
    // });
    // };
    const deleteItem = (id) => {
        console.log('deleted'); 
        setOldData((oldItems) =>{
            return oldItems.filter((arr,index)=>{
                return index !== id;
            });
        })
     }
    return<>
    <div className='main_div'>
      <div className='center_div'>
          <h1>Todo List</h1>
          <br/>
          <input type="text" placeholder='Add Items' value={Data} onChange={onevent} />
          <button onClick={addData}>+</button>
          <br/>
          <ol>
            {OldData.map((itemval,index) =>
            {
                return <TodoList key={index}
                 id={index}
                  text={itemval}
                    onselect={deleteItem}
                  />
            })}                
            
         </ol>
      </div>  
    </div>

    </>
}
export default AppTodo;