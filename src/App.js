import {React, useState, useEffect} from "react";
import './App.css';
 
function App() {

 
  const [datas,setData]=useState([])
  
   const parse=require('html-react-parser');
  //`${process.env.REACT_APP_API_URL}`
  
  useEffect(()=>{
    fetch('https://public-api.wordpress.com/rest/v1.1/sites/alessandrocalabro476768755.wordpress.com/posts')
    .then(res=>res.json())
    .then(data=>setData(data.posts[0]))
  },[])

  console.log(datas)

   return (
    <div className="content">

      {datas.content && <h2> {parse(datas.content)} </h2>}
      
    </div>
  ); 
}

export default App;
