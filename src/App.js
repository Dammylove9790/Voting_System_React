import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin_dashboard from './components/Admin_dashboard';
import Agent_dashboard from './components/Agent_dashboard';
import All_agents from './components/All_agents';
import Election_post from './components/Election_post';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Register';
import View_results from './components/View_results';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/admindashboard' element={<Admin_dashboard />} />
      <Route path='/agentdashboard' element={<Agent_dashboard />} />
      <Route path='/addpost' element={<Election_post />} />
      <Route path='/allagent' element={<All_agents />} />
      <Route path='/results' element={<View_results />} />
      <Route path='/login' element={<Loginpage />} />
      <Route path='/register' element={<Registerpage />} />

    </Routes>
      
    </>
  )
}

export default App