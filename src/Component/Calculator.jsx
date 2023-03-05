import React from 'react'
import "./calculator.css"
const Calculator = ({click,getResult,resetsfunc}) => {
  return (
    <div className='button'>
        <div className="row">
            <div className="numbers redwala zero " onClick={resetsfunc}>AC</div>
            <div className="numbers" onClick={()=>click(".")}>.</div>
            <div className="numbers" onClick={()=>click("*")}>x</div>

        </div>
        <div className="row">
            <div className="numbers" onClick={()=>click("1")}>1</div>
            <div className="numbers" onClick={()=>click("2")}>2</div>
            <div className="numbers" onClick={()=>click("3")}>3</div>
            <div className="numbers" onClick={()=>click("+")}>+</div>
        </div>
        <div className="row">
            <div className="numbers" onClick={()=>click("4")}>4</div>
            <div className="numbers" onClick={()=>click("5")}>5</div>
            <div className="numbers" onClick={()=>click("6")}>6</div>
            <div className="numbers" onClick={()=>click("/")}>/</div>
        </div>
        <div className="row">
            <div className="numbers" onClick={()=>click("7")}>7</div>
            <div className="numbers" onClick={()=>click("8")}>8</div>
            <div className="numbers" onClick={()=>click("9")}>9</div>
            <div className="numbers" onClick={()=>click("-")}>-</div>
        </div>
        <div className="row">
            <div style={{backgroundColor:"gray" ,width:"100%",height:"100%",textAlign:"center" ,}} className=" zerowala " onClick={()=>click("0")}><span style={{textAlign:"center" ,marginTop:"50px"}}>0</span></div>
            <div className="numbers zero zero1" onClick={()=>getResult()}>=</div>
        </div>
    </div>
  )
}

export default Calculator;