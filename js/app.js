console.log("working");

let users=0;
let comps=0;

const usersc=document.getElementById('user1');
const compsc=document.getElementById('comp1');

console.log(usersc.innerHTML);
console.log(compsc.innerHTML);

const score=document.querySelector(".scoreboard");
const result=document.querySelector("#msg1");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');

function comp(){
    const choice=["r","p","s"];
    let l=Math.floor(Math.random()*3);
    return choice[l];
}


function wins(){
    result.innerHTML="You Wins";
    users++;
    usersc.innerHTML=users;
    //console.log(users+" : "+comps);
}

function lose(){
    result.innerHTML="You Lose";
    comps++;
    compsc.innerHTML=comps;
    //onsole.log(users+" : "+comps);
}

function draw(){
    result.innerHTML="It's a draw";
}

function game(user){
    const compc=comp();
    //console.log(compc);
    //console.log(user);

    if(user==compc){
        draw();
    }
    else if((user=="r" && compc=="p") || (user=="p" && compc=="s") || (user=="s" && compc=="r")){
        lose();
    }
    else if((user=="p" && compc=="r") || (user=="s" && compc=="r") || (user=="r" && compc=="s")){
        wins();
    }
    else{
        console.log("unexpected error");
    }
}

function main(){
    rock_div.addEventListener("click",function(){
        console.log("you clicked rock");
        game("r");
    })

    paper_div.addEventListener("click",function(){
        console.log("you clicked paper");
        game("p");
    })

    scissor_div.addEventListener("click",function(){
        console.log("you clicked scissor");
        game("s");
    })
}


main();