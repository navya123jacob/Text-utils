import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('dark mode has been activated', 'success');
    } else {
      setMode('light');
      showAlert('Light mode has been activated', 'success');
    }
  };

  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="TextAbouts"
          mode={mode}
          toggle={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route path="/Text-utils/about" element={<About mode={mode}/>} />
            <Route
              path="/Text-utils"
              element={
                <TextForm
                  heading="Enter Text to analyze "
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
