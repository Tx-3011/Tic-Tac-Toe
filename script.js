console.log("hello world")



let board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let player1 = {
    name:"player1",
    score:99,
    icon:1
}

let player2 = {
    name:"player2",
    score:99,
    icon:2
}

let iconP1 = "X"
let iconP2 = "O"
let iconEmpty = ""




const initialiseGame = (function(){

    //Set all elements in board to 0 state

    const resetGame = ()=>{
        for(let row = 0; row<3; row++){
            for(let column=0;column<3;column++){
                board[row][column]=iconEmpty;
            }
        }

        player1.score = 0
        player2.score = 0
    }

    const printBoard = ()=>{
        // for(let row = 0; row<3; row++){
        //     for(let column=0;column<3;column++){
        //         console.log(board[row][column] )
        //     }
    
        //     console.log(" || ")
    
        // }

        console.table(board)
    }

    return{
        resetGame,
        printBoard
    }


})()

const duringGame = (function(){


    //check if any win conditions hit
    const checkWin = (icon)=>{

        if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[2][2] === icon){
            return true;
        }

        if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[1][1] === icon){
            return true;
        }

        for(let row = 0; row<3; row++){
            if(board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][2] === icon ){
                return true;
            }
        }


        for(let column = 0; column<3; column++){
            if(board[0][column] === board[1][column] && board[1][column] === board[2][column] && board[2][column] === icon ){
                return true;
            }
        }

        return false;



    }


    //checks if there are any 0's in the board
    const boardFull = ()=>{
        for(let row = 0; row<3; row++){
            for(let column=0;column<3;column++){
                if(board[row][column]===iconEmpty){
                    return false;
                }

            }
        }
        return true;
    }

    const occupied = (move)=>{
        if(board[move[0]][move[1]] === iconEmpty){
            return false
        }else{return true}
    }

    

    return{
        checkWin,
        boardFull,
        occupied
    }


})()


const runGame = function(){

    initialiseGame.resetGame()
    initialiseGame.printBoard()

    let move

    console.log("Starting Game...");

    let turn = 0;
    

    theLoop: while(!duringGame.boardFull()){
        console.log("Enter Move in Prompt");
        
        if(turn === 0){

        move = prompt("Player 1 : Enter Your Move (ex: 00, 01 etc) :").toString();
        if(!duringGame.occupied(move)){
            board[move[0]][move[1]] = iconP1
        }

        turn = 1

        initialiseGame.printBoard()

        if(duringGame.checkWin(iconP1)){
            console.log("Player 1 won the game !!!")
            break theLoop
        }

        if(duringGame.boardFull()){
            console.log("It's A Draw!!!");
            break theLoop
        }


        }

        if(turn === 1){

            move = prompt("Player 2 : Enter Your Move (ex: 00, 01 etc) :").toString();

            board[move[0]][move[1]] = iconP2
    
            turn = 0

            initialiseGame.printBoard()
            
            if(duringGame.checkWin(iconP2)){
                console.log("Player 2 won the game !!!")
                break theLoop
            }

            if(duringGame.boardFull()){
                console.log("It's A Draw!!!");
                break theLoop
            }
            
    
            }



        

        

    }
}



runGame()










