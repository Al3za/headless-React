import {React, useState, useEffect} from "react";
import './App.css';
 
function App() {

 
  const [datas,setData]=useState([])
  
   const parse=require('html-react-parser');
  
  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL)
    .then(res=>res.json())
    .then(data=>setData(data.posts[0]))
  },[])

   return (
    <div className="content">

      {datas.content &&  parse(datas.content)}
      
    </div>
  ); 
}

export default App;
