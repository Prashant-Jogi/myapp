import React,{useState,useEffect} from 'react';

const CovidProject = () =>{
  const [data,setData] = useState([]);
  const getCovidData = async()=>{
    const res =await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const actualData = await res.json();
    let [usd] = actualData.bpi;
    console.log(usd);
    setData(actualData.bpi);
  }
  useEffect(()=>{
    getCovidData();
  },[]);
  //console.log(data.code);
  return<>
      <div>


        </div>
  </>
}
export default CovidProject;
