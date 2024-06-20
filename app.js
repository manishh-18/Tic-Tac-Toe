let msg = document.querySelector(".msgCon");
let win = document.querySelector("#win");
let newGame = document.querySelector("#newGame");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turnO = true ;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]; 
let btnCount = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        btnCount++;
        console.log(btnCount);
        if(turnO){
            box.innerText = "O";
            box.style.color="red";
            turnO=false;
        }
        else{
            box.innerText = "X";
            box.style.color="black";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetBox = ()=>{
    turnO = true;
    enableBox();
    msg.classList.add("hide");
    btnCount=0;
}

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
reset.addEventListener("click",resetBox);
newGame.addEventListener("click",resetBox);

const showWinner = (winner)=>{
    win.innerText = `Congratulations! winner is ${winner}`;
    msg.classList.remove("hide"); 
    disableBox();
}

const draw = ()=>{
    win.innerText = "Draw 😵‍💫";
    msg.classList.remove("hide");
    disableBox();
}

const checkWinner = ()=>{
    for(let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!==""&&pos2!==""&&pos3!==""){
            if(pos1===pos2&&pos2===pos3){
                showWinner(pos1);
            }
        }
        if(btnCount===9){
            draw();
        }
    }
}
