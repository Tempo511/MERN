import React, { useState } from 'react'
import './App.css';
import AllPirates from "./components/AllPirates";
import NewPirate from './components/NewPirate';
import OnePirate from "./components/OnePirate"
import EditPirate from "./components/EditPirate"
import {Routes, Route} from 'react-router-dom'




function App() {
  


  return (
    <div style={{textAlign: "center"}}>
   

      <Routes>
      <Route exact path ="/" element={<AllPirates/>}></Route>
      <Route  path ="/pirates" element={<AllPirates/>}></Route>
      <Route path ="/pirates/new" element={<NewPirate/>}></Route>
      <Route path ="/pirates/:id" element={<OnePirate/>}></Route>
      <Route path ="/pirates/:id/edit" element={<EditPirate/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
