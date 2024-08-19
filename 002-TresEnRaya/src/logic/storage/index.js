export const saveGameToStorage = ({ board, turn})=>{
    //guardar la partida justo aquí
    window.localStorage.setItem('board',JSON.stringify(board))
    window.localStorage.setItem('turn',turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}