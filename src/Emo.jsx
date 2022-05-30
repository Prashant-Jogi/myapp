import React from 'react';
import { ReactDOM } from 'react';



class Emo extends React.Component{
  constructor(props){
    super(props);

    this.state={name:''};
    this.state={newname:''};
    this.addName=this.addName.bind(this);
    this.nme=this.nme.bind(this);
  }
   nme=(e)=>{
    this.setstate=({name:e.target.value});
  }
  addName(){
    this.setState((prevstate)=>{
      return{newname:name}
    });

  }


  render(){
    return(
      <div>
      <h1>{this.state.name}</h1>
      <input type='text' onChange={this.nme}/>
      <button onClick={this.addName}>Add name</button>
      </div>
    )
    }
}
export default Emo;
