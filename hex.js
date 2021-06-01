const colours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelectorAll(".btn");
const colourCode = document.querySelector(".colourCode");

button.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const designs = e.currentTarget.classList;
        let hexColourCode = "#"

        if(designs.contains("change")){
            for(let i=0; i<6;i++){
                hexColourCode += colours[randomHexNumber()];
                colourCode.textContent = hexColourCode;
                document.body.style.backgroundColor = hexColourCode;
            }
        } else{
            hexColourCode = "#EDFFEC"
            colourCode.textContent = hexColourCode;
            document.body.style.backgroundColor = hexColourCode;
        }
    })
})

function randomHexNumber(){
    return Math.floor(Math.random() * colours.length);
}
