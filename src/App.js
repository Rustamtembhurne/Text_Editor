import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './components/Homepage.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Alert from './components/Alert';




function App(props) {
  const [mode, setMode] = useState('light');   // your mode is enable or not...

  // alert function...
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enableed", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.backgroundColor = '#b7e6e6';
      // add image...

    }
  }




  return (
    <>

      <div className='head_text' style={{ height: "100%", width: "100vw", paddingBottom: "15px" }}>
        <BrowserRouter>

          <Navbar title='TextUtills' mode={mode} toggleMode={toggleMode} />

          <Alert alert={alert} />

          <Routes>

            <Route exact path="/" element={<div className="container my-5 ">
              <TextForm showAlert={showAlert} heading="Convert Case Online Text Editor" mode={mode} />

            </div>} />

            <Route exact path="/about" element={<About />} />

          </Routes>


        </BrowserRouter>
      </div>
    </>

  );
};


export default App;

