let gameSeq = [];
let userSeq = [];

let btns = ['red','green','yellow','purple'];

let level = 0;
let gameStart = false;
let highestScore = 0;

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

h3.innerText = `High Score: ${highestScore}`;

//For start the game.

document.addEventListener('keypress', ()=>{
    if(gameStart == false){
        console.log('game start!');
        gameStart = true;

        startLevel();
    }
})

// For Flash the button.

function splash(btn){
    btn.classList.add('splash');
    setTimeout(function(){
        btn.classList.remove('splash');
    },250)
}

//Flash after user press the button.

function userSplash(btn){
    btn.classList.add('userPress');
    setTimeout(function(){
        btn.classList.remove('userPress');
    },250)
}

//For random color picker and level up.

function startLevel(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random()*4);
    let randCol = btns[randInd];
    let randBtn = document.querySelector(`.${randCol}`);

    // console.log(randInd);
    // console.log(randCol);
    // console.log(randBtn);

    gameSeq.push(randCol);
    // console.log(gameSeq);

    splash(randBtn);
}

//Check answer is right or wrong.

function checkAns(ind){

    if(userSeq[ind] === gameSeq[ind]){
        if(userSeq.length == gameSeq.length){
            setTimeout(startLevel,1000);
        }
    }else{
        h2.innerText = `Game Over. Press any key to start. Your score is ${(level-1)*2}`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },250);

        if(highestScore < (level-1)*2){
            highestScore = (level-1)*2;
            h3.innerText = `High Score: ${highestScore}`;
        }

        reset();

    }
}


//butoon press function 

function btnPress(){

    let btn = this;
    userSplash(btn);

    userCol = btn.getAttribute('id');
    userSeq.push(userCol);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}

//call function if we click any button.

let allBtns = document.querySelectorAll('.box');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

//Reset the game.

function reset(){
    gameStart = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
