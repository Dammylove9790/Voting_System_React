import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Newadmin from './components/Newadmin';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Newadmin />} />
    </Routes>
      
    </>
  )
}

export default App