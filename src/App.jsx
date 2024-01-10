import './App.css'
import { Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';

export function App(){
  return (
    <div>
      <Menu />
      <h4>ReactJS+Vite : </h4>
      <Outlet />
    </div>
  )
}