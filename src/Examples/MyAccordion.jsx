import React,{useState} from 'react'

const MyAccordion = ({id,title}) => {
const [data,setData] = useState(false);
return<>
      <div>
      <p onClick={()=>setData(!data)}>{data ? '+':'-'}</p>
      <h3>{id}</h3>
      </div>
      {data && <p>{title}</p>}
</>
}

export default MyAccordion;
