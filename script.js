const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btncalcular")
const Presult = document.querySelector("#resultado")
const form = document.querySelector("#form")

form.addEventListener("submit", Sumasinput())


function Sumasinput(event){
    
    event.preventDefault();
    const equall = parseInt(input1.value) + parseInt(input2.value);
    Presult.innerHTML = equall;
}

