import './App.css'
import React , {useState} from 'react';
import SingleBlock from "./block";
//import EndGame from "./EndGame";
 
const Initail = "";
const X_Player = "X";
const O_Player = "O";


function TicTacToe() {
   const [block, setBlock] = useState(Array(9).fill(""))

  return (
    <div >
      Tic-tac-toe
    </div>
  )
}

export default TicTacToe
