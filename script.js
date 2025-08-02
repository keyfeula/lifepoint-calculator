const playerOneLP = document.querySelector(".player1 .lifepoints");
const playerTwoLP = document.querySelector(".player2 .lifepoints");
const p1Add = document.querySelector(".player1 .add");
const p2Add = document.querySelector(".player2 .add");
const p1Sub = document.querySelector(".player1 .subtract");
const p2Sub = document.querySelector(".player2 .subtract");
const display = document.querySelector(".display");
const calcButtons = document.querySelector(".buttons");
const calcDisplay = document.querySelector(".calc-display");
const timer = document.querySelector(".timer");

let p1Lifepoints = 8000;
let p2Lifepoints = 8000;
let time = 2700;

setInterval(() => {
    if (time <= 0) {
        return;
    }
    time -= 1;
    timer.textContent = time;
}, 1000);

display.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") {
    return;
   }
   switch (event.target.id) {
    case "p1-add":
        p1Lifepoints = p1Lifepoints + Number(calcDisplay.textContent);
        playerOneLP.textContent = p1Lifepoints;
        break;
    case "p1-sub":
        p1Lifepoints = p1Lifepoints - Number(calcDisplay.textContent);
        playerOneLP.textContent = p1Lifepoints;
        break;
    case "p2-add":
        p2Lifepoints = p2Lifepoints + Number(calcDisplay.textContent);
        playerTwoLP.textContent = p2Lifepoints;
        break;
    case "p2-sub":
        p2Lifepoints = p2Lifepoints - Number(calcDisplay.textContent);
        playerTwoLP.textContent = p2Lifepoints;
        break;
   }
});

calcButtons.addEventListener("click", (event) => {
   if (event.target.tagName !== "BUTTON") {
    return;
   }

   const id = event.target.id;
   switch (id) {
    case "0":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "0";
        }
        break;
    case "1":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "1";
        }
        break;
    case "2":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "2";
        }
        break;
    case "3":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "3";
        }
        break;
    case "4":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "4";
        }
        break;
    case "5":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "5";
        }
        break;
    case "6":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "6";
        }
        break;
    case "7":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "7";
        }
        break;
    case "8":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "8";
        }
        break;
    case "9":
        if (calcDisplay.textContent.length < 5) {
            calcDisplay.textContent += "9";
        }
        break;
    case "X":
        let text = calcDisplay.textContent;
        calcDisplay.textContent = [...text].splice(0, text.length - 1).join("");
        break;
    case "C":
        calcDisplay.textContent = "";
        break;
    case "new-game":
        p1Lifepoints = 8000;
        p2Lifepoints = 8000;
        playerOneLP.textContent = p1Lifepoints;
        playerTwoLP.textContent = p2Lifepoints;
        calcDisplay.textContent = "";
        time = 2700;
        timer.textContent = time;
        break;
   }
});