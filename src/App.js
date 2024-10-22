import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
   
   const [mode, setMode] = useState('light');  // Change initial mode to 'light'
   const [alert, setAlert] = useState(null);
   const showAlert=(message,type)=>
   {
      setAlert(
        {
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert (null)
        }, 1200);
   };
   const toggleMode = () => {
     if (mode === 'light') {
       setMode('dark');
       document.body.style.backgroundColor = '#041b3b'; // Optional: change body background color for dark mode
       showAlert("Dark Mode has been Enabled","success");
       document.title="TextUtils-Dark Mode"
     } else {
       setMode('light');
       document.body.style.backgroundColor = '#b7c0c9'; // Reset to light background
       showAlert("Light Mode has been Enabled","success");
       document.title="TextUtils-Light Mode"
     }
   };
   useEffect(() => 
    {
      document.body.style.backgroundColor = '#b7c0c9'; // Light mode by default
      document.title = "TextUtils - Light Mode";
    }, []);
   return (
     <>
        {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element=  {<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
          </Route>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* <About/> */}
        </div>
        {/* </Router> */}
     </>
   );
}

export default App;
