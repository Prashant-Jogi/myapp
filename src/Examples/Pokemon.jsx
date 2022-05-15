import axios from 'axios';
import React,{useEffect, useState} from 'react';


const Pokemon = () =>{
  const [num,setData] = useState();
  const [name,setName] = useState();
  const [moves,setmoves] = useState();
  useEffect(()=>{
    async function getData (){
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      setName(res.data.name);
      setmoves(res.data.moves.length);
    }
    getData();
  });
  return<>
      <h1>You Choose {name}</h1>
      <h1>{name} Moves is {moves}</h1>
      <h1>{name} rank is {num}</h1>
        <select value={num} onChange={(event)=>{
          setData(event.target.value);
        }}>
          <option value='1'>1</option>
          <option value='25'>25</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
  </>
}
export default Pokemon;
