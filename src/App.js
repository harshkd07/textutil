
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)  

  const showalert=(message, type) =>{
      setalert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }
 
  const togglemode = ()=>{
    if(mode ==='light'){
      setmode('dark')
      document.body.style.backgroundColor = "black";
      showalert("Dark mode is enabled","success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "#fff";
      showalert("Light mode is enabled","success");
    }
    
  }

  return (
<>

<Navbar title = "EAST side flow" mode={mode} togglemode={togglemode}  />
 <Alert alert={alert}/>
 <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode}/>
</>

  );
}

export default App;
