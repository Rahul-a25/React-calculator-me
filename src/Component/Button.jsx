import React, { useState } from 'react'
import "./button.css"

function Button({input,Setinput}) {
    const acwala=()=>{
        Setinput((""))
    }
  const submit=(e)=>{
    if(input.concat(e.target.name).length>="20"){
        Setinput("excited limit")
       
    }
    else{
        Setinput(input.concat(e.target.name));
    }
    
  }
  const result=()=>{
    try{
        Setinput(eval(input).toString())
    }
    catch(err){
        Setinput("error");
    }
  }

  return (
   
    <>
      <div className="App">
      <div className="maindiv">
            
              <div className='content'>{input}</div>
          
            <div className="container">
                 <button onClick={acwala} className="box acwala"
                  >AC</button>
                  <button name="/"     onClick={submit} className="box divide">/</button>
                    <button name="*"     onClick={submit} className="box mul">X</button>
                    <button name="7"     onClick={submit} className="box seven"
                    >7</button>
                    <button name="8"  onClick={submit} className="box eight">8</button>
                    <button name="9"  onClick={submit} className="box nine">9</button>
                    <button name="-"  onClick={submit} className="box minus">-</button>
                    <button name="4"  onClick={submit} className="box four">4</button>
                    <button name="5"  onClick={submit} className="box five" >5</button>
                    <button name="6"  onClick={submit} className="box six">6</button>
                    <button name="+"  onClick={submit} className="box plus">+</button>
                    <button name="1"  onClick={submit} className="box one" >1</button>
                    <button name="2"  onClick={submit} className="box two" >2</button>
                    <button name="3"  onClick={submit} className="box third">3</button>
                    <button id='equal'  onClick={result} className="box equal">=</button>
                    <button name='0' onClick={submit} className="box zero">0</button>
                    <button name="."  onClick={submit} className="box dot" >.</button>
            </div>
      </div>
    </div>
    </>
  )
}

export default Button
