import './App.css'
import React , {useState} from 'react';
import SingleBlock from "./block";
import End from "./End";
 
const Initail = "";
const X_Player = "X";
const O_Player = "O";

const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function TicTacToe() {

   const [block, setBlock] = useState(Array(9).fill(""))
   const [player, setPlayer] = useState(false);
   const [Finished, setFinished] = useState(false);
   const [draw, setDraw] = useState(false);
   const [winCount, setwinCount] = useState({ X: 0, O: 0 });
 

   if (!Finished) {
    //* X win check
    for (let i = 0; i < 8; i++) {
      if (
        block[winCombination[i][0]] === X_Player &&
        block[winCombination[i][1]] === X_Player &&
        block[winCombination[i][2]] === X_Player
      ) 
      {
        setFinished(true);
        setwinCount({ ...winCount, X: winCount.X + 1 });
        console.log("X WON");
        return;
      }
    }

    //* O win check
    for (let i = 0; i < 8; i++) {
      if (
        block[winCombination[i][0]] === O_Player &&
        block[winCombination[i][1]] === O_Player &&
        block[winCombination[i][2]] === O_Player
      ) 
      {
        setFinished(true);
        setwinCount({ ...winCount, O: winCount.O + 1 });
        console.log("O WON");
        return;
      }
    }

    //* Draw game check
    if (!block.includes(Initail)) 
    {
      setDraw(true);
      setFinished(true);
      console.log("DRAW");
    }
  }

  function restartGame() {
    setBlock(Array(9).fill(Initail));
    setFinished(false);
    setDraw(false);
  }

  function clearHistory() {
    setwinCount({ X: 0, O: 0 });
    restartGame();
  }

  // isGameOver();

  function handleClick(id) {
    setBlock(
      block.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_Player;
          } else {
            return O_Player;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }



  return (
    <div>
    <span className="win-history">
      X's WINS: {winCount.X}
      <br />
      O's WINS: {winCount.O}
    </span>

    {Finished && (
      <End
        winCount={winCount}
        restartGame={restartGame}
        player={player}
        draw={draw}
        clearHistory={clearHistory}
      />
    )}
    <SingleBlock clickedArray={block} handleClick={handleClick} />
    
  </div>
)
  
}

export default TicTacToe
