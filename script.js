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
                if(board[row][column]===0){
                    return false;
                }

            }
        }
        return true;
    }

    

    return{
        checkWin,
        boardFull
    }


})()


const runGame = function(){

    initialiseGame.resetGame()
    initialiseGame.printBoard()

    let moveRow
    let moveCol

    console.log("Starting Game...");

    let turn = 0;
    

    theLoop: while(!duringGame.boardFull()){
        console.log("Enter Move in Prompt");
        
        if(turn === 0){

        moveRow = prompt("Player1 : Enter the Row (0-2) :");
        moveCol = prompt("Player1 : Enter the Column (0-2) :");

        board[moveRow][moveCol] = 1

        turn = 1

        initialiseGame.printBoard()
        console.log(`Win status for P1 is ${duringGame.checkWin(1)}`);

        if(duringGame.checkWin(1)){
            console.log("Win Condition Hit for P1!!!")
            break theLoop
        }


        }

        if(turn === 1){

            moveRow = prompt("Player2 : Enter the Row (0-2) :");
            moveCol = prompt("Player2 : Enter the Column (0-2) :");
    
            board[moveRow][moveCol] = 2
    
            turn = 0

            initialiseGame.printBoard()
            console.log(`Win status for P2 is ${duringGame.checkWin(2)}`);

            if(duringGame.checkWin(2)){
                console.log("Win Condition Hit for P2!!!")
                break theLoop
            }
            
    
            }



        

        

    }
}



runGame()









