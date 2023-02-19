import './App.css';
import React from "react";
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import Form from './components/Form';
import BottomNav from './components/BottomNav';

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='bodyDiv'>
        <TopNavbar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
              {/* <Home/>
            </Route> */}
            <Route path="/components/Form" element={<Form/>}/>
              {/* <Form/>
            </Route> */}
        </Routes>

        
        
        <BottomNav/>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
