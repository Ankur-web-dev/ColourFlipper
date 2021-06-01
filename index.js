const colours = ["GREEN", "RED", "BLUE", "RGB(128,128,0)", "RGB(128,0,128)"];

const button = document.querySelectorAll(".btn");
const colourCode = document.querySelector(".colourCode");

button.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const designs = e.currentTarget.classList;
        const randomColour = colours[randomNumber()];
        const defaultColour = "#EDFFEC"

        if (designs.contains('change')){
            document.body.style.backgroundColor = randomColour;
            colourCode.textContent = randomColour;
        } else if (designs.contains('reset')){
            document.body.style.backgroundColor = defaultColour;
            colourCode.textContent = defaultColour;
        }
    })
})

function randomNumber(){
    return Math.floor(Math.random() * colours.length)
}