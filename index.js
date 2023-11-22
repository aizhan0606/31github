/* const current_year = 2023;
const correct_answer = 'Ответ правильный';
const error_answer = 'Ответ неправильный';


const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function(){
    const inputValue = inputNode.value;
  

    if (!inputValue){
        return
    }
    const answer = Number(inputNode.value);
    let output = correct_answer;

    if(answer !== current_year){
        output = error_answer
    }
   outputNode.innerHTML= output;
}); */

//Калькулятор 


/* let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));
buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch (e) {
                    display.innerText = "Error!"
                }
                break;
            case "+/-":
                display.innerText = "-";
                break;
            case "%":
                let passedText = display.innerText + "/100";
                display.innerText = eval(passedText);
                break;
            default:
                if (display.innerText === "0" && e.target.innerText !== ".") {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    });
}); */

