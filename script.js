console.log("hello world")

let board = [
    [0,0,0],
    [0,999,0],
    [0,0,0]
]

let players = {
    
}


function initialiseGame(board){

    //Set all elements in board to 0 state

    const resetBoard = ()=>{
        for(let row = 0; row<3; row++){
            for(let column=0;column<3;column++){
                board[row][column]=0;
            }
        }
    }

    return{
        resetBoard
    }


}




console.log(board[1][1])





