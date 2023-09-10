import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {  Register } from './components/register/reg';
import { Login } from './components/login/login';

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
