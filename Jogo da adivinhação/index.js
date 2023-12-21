
const randomNumber = Math.round(Math.randon()*10)
let xAttemps = 1

function handleclick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    if(Number (inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText="você acertou em " + xAttemps + "tentativas";
        
    }
    xAttemps++

}
