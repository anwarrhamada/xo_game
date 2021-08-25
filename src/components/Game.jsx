import react, { useState } from "react";
import { calculateWinner } from "../Helper";
import Board from "./Board";
import Popup from './Popup';
import 'reactjs-popup/dist/index.css';
import Moves from './Moves'
//toast.configure();
function Game(){
const [history,setHistory]=useState(Array(9).fill(null));
const[XisNext,setXisNext]=useState(true);
//const x0= XisNext ? <span id="x" className="X">X</span> :<span  id="o"className="O">O</span>;
const x0= XisNext ? "X" : "O"
//const x=xO ? document.getElementById("x").textContent : 
//console.log(x+"is x");
const winner=calculateWinner(history)

function handleClick(i){
  const boardCopy=[...history];
  if(winner || boardCopy[i]) return;
 // console.log("winner"+winner)
  boardCopy[i]= x0;
  setHistory(boardCopy);
  setXisNext(!XisNext);
  //console.log(i);
  //console.log(boardCopy);
}
function refreshPage() {
  window.location.reload(false);
}
function moves(){
  
}

    return (
      <>
      <Board squares={history} onClick={handleClick} />
      
      <div >
        <h3 className="winner">
          {winner ? "Winner: " + winner : "Next Player: " + (XisNext ? "X" : "O")}
        </h3>
        
      </div>
 <button onClick={refreshPage}>Restart</button>
 <Popup />
    </>
    )
}
export default Game;