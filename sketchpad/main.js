const container = document.querySelector("#container");
//function that creates the desired amount of divs and attaches them to container
function createAndAttachDivs(num){
    for(let i=0; i<num*num;i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("squares");
        container.appendChild(newDiv);
        newDiv.style.cssText = `flex: 0 0 calc(99% / ${num})`;
    }
}

//add the hover listeners
function addDrawListeners(){
    let mouseIsDown = false;
    const squares = document.querySelectorAll(".squares");
    squares.forEach((square) => {
    square.addEventListener("mousedown", () =>{
        mouseIsDown = true;
        square.style.backgroundColor = "black";
    });
    square.addEventListener("mouseenter", () =>{
        if(mouseIsDown === true){
            square.style.backgroundColor = "black";
        }
    });
    square.addEventListener("mouseup", () =>{
        mouseIsDown = false;
    });
});
}

function promptUser(){
    let size = -1;
    while(size > 100 || size < 1){
        size = parseInt(prompt("Enter a number for the size of your canvas (max. size of 100):"));
    }
    return size;
}

function addClearListener(){
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", ()=>{
        const squares = document.querySelectorAll(".squares");
        squares.forEach((square) => {
            square.style.backgroundColor = "white";
        });

    });
}

function addRestartListener(){
    const restartButton = document.querySelector("#restart");
    restartButton.addEventListener("click",() =>{
        location.reload();
    });
}


function main(){
    // let size = -1;
    // while(size >100 || size < 0){
    //     size = promptUser();
    // }
    let answer = promptUser();
    
    createAndAttachDivs(answer);
    addDrawListeners();
    addClearListener();
    addRestartListener();
}

main();


