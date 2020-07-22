var input = document.querySelector("input");
var p1score = 0;
var p2score = 0;
var winscore = 5;
var gameover = false;

p1.addEventListener("click", increasep1);
p2.addEventListener("click", increasep2);
r.addEventListener("click", reset);
input.addEventListener("change", set);


function increasep1()
{
    if(!gameover) {
    p1score++;
    p1display.textContent = p1score;
    if(p1score == winscore){
        p1display.classList.add("win");
        gameover = true;
    }
    }
}

function increasep2()
{
    if(!gameover) {
    p2score++;
    p2display.textContent = p2score;
    if(p2score == winscore) {
        p2display.classList.add("win");
        gameover = true;
    }
    }
}

function reset()
{
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    gameover = false;
    p1display.classList.remove("win");
    p2display.classList.remove("win");
}

function set()
{
    winscore = input.value;
    num.textContent = winscore;
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    gameover = false;
    p1display.classList.remove("win");
    p2display.classList.remove("win");
}