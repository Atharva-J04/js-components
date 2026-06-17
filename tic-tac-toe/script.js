let gameOver = false;
let cells = document.querySelectorAll(".cell");
let currentplayer="X";
for(let cell of cells){
    cell.addEventListener("click", function(){
        if(cell.innerHTML !== ""){
          return;
}  
if(gameOver){
    return;
}
   if(currentplayer==="X"){
        cell.innerHTML="X";
        currentplayer="O";
    }
    else{
        cell.innerHTML="O";
        currentplayer="X";
    }
    checkWinner();
    });
}

const patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let win = document.querySelector(".winner");

function checkWinner(){


    for(let pattern of patterns){

        let a = cells[pattern[0]].innerHTML;
        let b = cells[pattern[1]].innerHTML;
        let c = cells[pattern[2]].innerHTML;

        if(a !== "" && a === b && b === c){

            win.innerHTML = a + " Wins!";
            gameOver = true;
            return true;
          
        }
        let filled = true;

    for(let cell of cells){
        if(cell.innerHTML === ""){
            filled = false;
            break;
        }
    }

    if(filled){
        win.innerHTML = "Draw!";
        gameOver = true;
    }
    }
    return false;
}

let butt =document.querySelector(".help");
butt.addEventListener("click",function(){
    window.location.reload();
});
