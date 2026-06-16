let rbox =document.querySelector(".right"); 
let r =document.querySelector(".righty");
let l =document.querySelector(".lefty");
let start =document.querySelector(".start-btn");
let head = document.querySelector(".headd");
let win=document.querySelector(".win");
let score1 =document.querySelector(".score1");
let score2 =document.querySelector(".score2");
let draw =document.querySelector(".draw");
let mainn=["rock","paper","scissors"];
let count1=0;
let count2=0;
let count3=0;
start.addEventListener("click",function(){
    let num = Math.floor(Math.random()*mainn.length);
    let num2 = Math.floor(Math.random()*mainn.length);
    r.textContent=mainn[num];
    l.textContent=mainn[num2];
    head.textContent="lets go";


let p1 = l.textContent;
let p2 = r.textContent;

if (p1 === p2) {
    win.textContent = "It's a draw!";
    count3++;
}
else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
) {
    win.textContent = "Player 1 wins!";
     count1++;
}
else {
    win.textContent = "Player 2 wins!";
    count2++;
}
score1.textContent=`player1: ${count1}`;
score2.textContent=`player2: ${count2}`;
draw.textContent=`Draw matches: ${count3}`;
})
let reset= document.querySelector(".reset");
reset.addEventListener("click",function(){
    count1=0;
    count2=0;
    count3=0;

    score1.textContent = `Player 1: ${count1}`;
    score2.textContent = `Player 2: ${count2}`;
    draw.textContent = `Draw matches: ${count3}`;

    win.textContent = "who going to win?";
    l.textContent = "left";
    r.textContent = "right";
    head.textContent = "Are You Ready for the Match?";
})
