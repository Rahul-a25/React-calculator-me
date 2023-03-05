import './App.css';
import "./Component/calculator.css"
import Calculator from './Component/Calculator';
import Display from './Component/Display';
import { useState,useEffect } from 'react';
function App() {
  const [input,setInput]=useState("")
  const [Show,SetShow]=useState("")
  function click(e){
    setInput(input+e);
  }
  function getResult(){
    SetShow(eval(input))
  }
  function resetsfunc(){
    SetShow("")
    setInput("")
  }
  useEffect(()=>{
    SetShow(input)

  },[input])
  return (
    <div className="App">
      <div className="container">
      <Display Show={Show} />
      <Calculator click={click} getResult={getResult} resetsfunc={resetsfunc}/>
      </div>
    </div>
  );
}

export default App;
