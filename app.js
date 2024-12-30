let gameSeq =[];
let userSeq=[];

let btns =  ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
    if (!started) {
        started = true;
        console.log("Game Started");
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomcolor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    btnFlash(randomBtn)
 }

 function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
 }

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
            setTimeout(levelUp , 1000);
    }
    else{
            h2.innerText = `Game Over!! Your score is ${level}`;  
            reset();
    }
}

 let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
 }