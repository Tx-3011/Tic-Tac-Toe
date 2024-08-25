console.log("hello world")

let board = [
    [0,0,0],
    [0,999,0],
    [0,0,0]
]

let player1 = {
    name:"player1",
    score:99
}

let player2 = {
    name:"player2",
    score:99
}




const initialiseGame = (function(){

    //Set all elements in board to 0 state

    const resetGame = ()=>{
        for(let row = 0; row<3; row++){
            for(let column=0;column<3;column++){
                board[row][column]=0;
            }
        }

        player1.score = 0
        player2.score = 0
    }

    return{
        resetGame,
    }


})()

const duringGame = function(){


    //checks if there are any 0's in the board
    const boardFull = ()=>{
        for(let row = 0; row<3; row++){
            for(let column=0;column<3;column++){
                if(board[row][column]===0){
                    return false;
                }

            }
        }
        return true;
    }


}



initialiseGame.resetGame();
console.log(board[1][1])





