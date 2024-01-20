import './App.css'
import { Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';
import { useState } from 'react';

export function App(){

  /** Data pass from child to parent */
  const [msg, setMsg] = useState('PL');
  const getMsg = (msg) =>{
    setMsg(msg);
  }

  return (
    <div className="container">
      <Menu getMsg={getMsg} />
      <h4>ReactJS+Vite+Redux : {msg}</h4>
      <Outlet />
    </div>
  )
}