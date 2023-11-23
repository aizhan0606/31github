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

const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
    if (event.code.toLocaleLowerCase() === 'space'){
        setRandomColors()
    }

})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type

    if (type === 'lock'){
        const node = 
        event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0]


        node.classList.toggle('fa-lock-open') 
        node.classList.toggle('fa-lock')
    }
})

function gerenerateRandomColor() {
    //RGB
    //#FF0000
    //#00FF00
    //#0000FF

    const hexCodes = '0123456789ABCDEF'

    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}



function setRandomColors() {
    cols.forEach((col) =>{
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = chroma.random()

        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(button, color)
    })
}

function setTextColor(text, color){
   const luminance = chroma(color).luminance()
   text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()