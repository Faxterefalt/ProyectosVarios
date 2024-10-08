import {WINNER_COMBOS } from '../components/Constants'

export const checkWinner = (boardToCheck) =>{
    //se revisan todas las combinaciones ganadoras
    for(const combo of WINNER_COMBOS){
      const  [a, b, c] = combo
      if(
        boardToCheck[a] && // 0 -> x u o
         boardToCheck[a] === boardToCheck[b] && 
          boardToCheck[a] === boardToCheck[c]
       ){
          return boardToCheck[a] // x u o
       }
      
    }
    //si no hay ganador
    return null
  }