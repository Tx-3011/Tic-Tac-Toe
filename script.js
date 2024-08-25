console.log("hello world")

let board = [
    [0,0,0],
    [0,1,1],
    [1,0,0]
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

const duringGame = (function(){


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

    //check if any win conditions hit
    const checkWin = ()=>{

        let winCombos = 0;

        if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[2][2] === 1){
            return true;
        }

        if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[1][1] === 1){
            return true;
        }

        for(let row = 0; row<3; row++){
            if(board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][2] === 1 ){
                return true;
            }
        }


        for(let column = 0; column<3; column++){
            if(board[0][column] === board[1][column] && board[1][column] === board[2][column] && board[2][column] === 1 ){
                return true;
            }
        }

        return false;



    }

    return{
        checkWin,
        boardFull
    }


})()



// initialiseGame.resetGame();
console.log(board[1][1])

// if(duringGame.checkWin()){
//     console.log("Win condition hit");
// }

console.log(duringGame.checkWin());






