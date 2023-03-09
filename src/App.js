
import { useState } from 'react';
import './App.css';
import Button from './Component/Button';
function App() {
  const [input,Setinput]=useState((""))
  return (
    <>
  <Button input={input} Setinput={Setinput}  />
    </>
  );
}

export default App;
