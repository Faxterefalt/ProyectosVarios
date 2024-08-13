import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './components/Constants.jsx';
import { Square } from './components/Square.jsx';
import { checkWinner } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';

function App() {

  const [board, setBoard] = useState(
   Array(9).fill(null)
  )

  const [turn, setTurn]= useState(TURNS.X)
  //null es que no hay ganador, false si hay empate
  const [winner, setWinner]= useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkedEndGame = (newBoard)=>{
    //revisamos si hay empate, si no hay espacios vacíos en el tablero
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {

    //no actualizar posición si tiene algo
    if(board[index] || winner) return //si hay ganador, no más juego

    //actualizar tablero
    const newBoard = [... board]
    newBoard[index] = turn 
    setBoard(newBoard)

    //cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner) //la actualización del estado es asíncrona
      //si fuese síncrono, winner tendría el estado nuevo

    }else if(checkedEndGame(newBoard)){
      setWinner(false) //hubo empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear juego</button>
      <section className='game'>
        {
          board.map((_,index)=>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}> 
            {TURNS.X}
            </Square>
          <Square isSelected={turn === TURNS.O}> 
            {TURNS.O}
            </Square>

        </section>
        <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
    
  )
}

export default App
