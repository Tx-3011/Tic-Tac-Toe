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

        test = 0

        for(let i = 0; i<cells.length; i++){
            cells[i].style.backgroundImage = "url('')"
        }

        result.style.display = "none"
    }

    const printBoard = ()=>{
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

    const occupied = (move)=>{
        if(board[move[0]][move[1]] === 0){
            return false
        }else{return true}
    }

    const inputMove = (move,icon)=>{
        board[move[1]][move[2]] = icon;
    }

    const removeEventListener = ()=>{
        for(let i = 0; i<cells.length; i++){
            cells[i].removeEventListener('click',removeClick)
        }
    }

    

    return{
        checkWin,
        boardFull,
        occupied,
        inputMove
    }


})()

// FOR RUNNING ON CONSOLE


// const runGame = function(){

//     initialiseGame.resetGame()
//     initialiseGame.printBoard()

//     let move

//     console.log("Starting Game...");

//     let turn = 0;
    

//     theLoop: while(!duringGame.boardFull()){
//         console.log("Enter Move in Prompt");
        
//         if(turn === 0){

//         move = prompt("Player 1 : Enter Your Move (ex: 00, 01 etc) :").toString();
//         if(!duringGame.occupied(move)){
//             board[move[0]][move[1]] = iconP1
//         }

//         turn = 1

//         initialiseGame.printBoard()

//         if(duringGame.checkWin(iconP1)){
//             console.log("Player 1 won the game !!!")
//             break theLoop
//         }

//         if(duringGame.boardFull()){
//             console.log("It's A Draw!!!");
//             break theLoop
//         }


//         }

//         if(turn === 1){

//             move = prompt("Player 2 : Enter Your Move (ex: 00, 01 etc) :").toString();

//             board[move[0]][move[1]] = iconP2
    
//             turn = 0

//             initialiseGame.printBoard()
            
//             if(duringGame.checkWin(iconP2)){
//                 console.log("Player 2 won the game !!!")
//                 break theLoop
//             }

//             if(duringGame.boardFull()){
//                 console.log("It's A Draw!!!");
//                 break theLoop
//             }
            
    
//             }



        

        

//     }
// }




const oPath = "url('./ImageAssets/circle2.svg')"
const xPath = "url('./ImageAssets/cross.svg')"


const gameBoard = document.querySelector(".gameBoard")
const cells = gameBoard.querySelectorAll(".iconArea")
const result = document.querySelector("#result")
const reset = document.querySelector("#reset")

turn = 0;



for(let i=0;i<cells.length;i++){
    cells[i].addEventListener('click',()=>{

        if(turn===0){
            


            let tempMove = (cells[i].id).toString()

            if(board[tempMove[1]][tempMove[2]] === 0 && !duringGame.checkWin(1) && !duringGame.checkWin(2)){


            cells[i].style.backgroundImage = xPath

            

            board[tempMove[1]][tempMove[2]] = 1

            if(duringGame.checkWin(1)){
                result.textContent = "Player X won the game!!!"
                result.style.display = "block"
                
            }

            if(duringGame.boardFull()){
                result.textContent = "It's a Draw"
                result.style.display = "block"

            }

            turn = 1

        }
            
            
        }else if(turn===1){

            let tempMove = (cells[i].id).toString()

            if(board[tempMove[1]][tempMove[2]] === 0 && !duringGame.checkWin(1) && !duringGame.checkWin(2)){
            

            cells[i].style.backgroundImage = oPath

            board[tempMove[1]][tempMove[2]] = 2

            if(duringGame.checkWin(2)){
                result.textContent = "Player O won the game!!!"
                result.style.display = "block"


            }

            if(duringGame.boardFull()){
                result.textContent = "It's a Draw"
                result.style.display = "block"

            }

            turn = 0

        }

        }


    })

    reset.addEventListener('click',()=>{
        initialiseGame.resetGame();
    })
}











