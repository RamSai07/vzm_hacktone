import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {  Register } from './components/register/reg';
import { Login } from './components/login/login';
import { Addproject } from './components/project/project';
import { Addproject1 } from './components/project/project1';

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>}/>
      <Route path='/addproject' element={<Addproject/>}/>
      <Route path='/addproject1' element={<Addproject1/>}/>

      
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
