import React, { useState, useRef } from 'react'
import './TicTacToe.css'
import circle from '../Assets/circleS.png'
import cross from '../Assets/cross.png'

let data = ["","","","","","","","",""];

const TicTacToe = () => {
    let [count, setCount]= useState(0);
    let [stop, setStop] = useState(false);
    const changeTitle = useRef(null);
   
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let boxArray = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e, num) =>{  
        if(stop){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML=`<img src='${cross}'>`;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML=`<img src='${circle}'>`;
            data[num]="o";
            setCount(++count);
        }
        checkWin();
    }
    const checkWin = () =>{
        if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
            won(data[2]);
        }
        
        if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
            won(data[5]);
        }
        if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
            won(data[8]);
        }
        if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
            won(data[6]);
        }
        if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
            won(data[7]);
        }
        if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
            won(data[8]);
        }
        if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
            won(data[8]);
        }
        if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
            won(data[6]);
        }
      
    }
    const won = (winner)=>{
        setStop(true);
        if(winner==="x"){
            changeTitle.current.innerHTML = `<img src= ${cross}> wins!`;
        }
        else{
            changeTitle.current.innerHTML = `<img src='${circle}'> wins!`;
        }
        
    }
    const reset = ()=>{
       setStop(false);
       data = ["","","","","","","","",""];
       changeTitle.current.innerHTML='Tic Tac Toe !';
       boxArray.map((e)=>{
        return(
          e.current.innerHTML = "");
       })
    }

  return (
    <>
    <div className='container'>
        <h1 className='title' ref={changeTitle}>Tic Tac Toe !</h1>
    </div>
    <div className='boxContainer'>
    <div className='row' >
    <div className='cells' ref = {box1}  onClick={(e)=>{toggle(e,0)}}></div>
    <div className='cells' ref = {box2}  onClick={(e)=>{toggle(e,1)}}></div>
    <div className='cells' ref = {box3}  onClick={(e)=>{toggle(e,2)}}></div>
    </div>
    <div className='row' >
    <div className='cells' ref = {box4}  onClick={(e)=>{toggle(e,3)}}></div>
    <div className='cells' ref = {box5}  onClick={(e)=>{toggle(e,4)}}></div>
    <div className='cells' ref = {box6}  onClick={(e)=>{toggle(e,5)}}></div>
    </div>
    <div className='row' >
    <div className='cells' ref = {box7}  onClick={(e)=>{toggle(e,6)}}></div>
    <div className='cells' ref = {box8}  onClick={(e)=>{toggle(e,7)}}></div>
    <div className='cells' ref = {box9}  onClick={(e)=>{toggle(e,8)}}></div>
    </div>
    </div>
    <div className='btn'>
        <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default TicTacToe