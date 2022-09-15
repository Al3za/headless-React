import {React, useState, useEffect} from "react";
import './App.css';
 
function App() {

 
  const [datas,setData]=useState([])
  
   const parse=require('html-react-parser');
  
  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL)
    .then(res=>res.json())
    .then(data=>setData(data[0]))
  },[])
  console.log(datas)
   return (
    <div className="content">

      {datas.content &&  parse(datas.content.rendered)}
      
    </div>
  ); 
}

export default App;

