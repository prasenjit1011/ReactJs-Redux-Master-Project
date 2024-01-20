import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let cnt = parseInt(10*Math.random());

const CompA = () => {
  return (
    <>
      <h3>-: CompA ({cnt}) :-</h3>
    </>
  )
}

function CompB() {
  return (
    <>
      <h3>-: CompB ({cnt}) :-</h3>
    </>
  )
}

function HOC(A, B){
  return cnt > 5 ? A : B;
}

const Pqr = HOC(CompA, CompB);

export default Pqr;

