const enviar = document.querySelector(".envio")

const erro = document.querySelector(".error")

const form = document.querySelector("form")

const input = document.querySelector("input")

const label = document.querySelector("label")


form.addEventListener("submit", validate)

SubmitEvent.addEventListener("click", validate)

function validade(e) {
    e.preventDefeault()

	const inputValue = input.value.trim()


    if (!isEmail(inputValue)) {
        erro.style.display = "block"
        label.style.display = "block"
    } 
    
    else {
        erro.style.display = "none"
        erroImg.style.display = "none"
    }
}

function isEmail (input) {
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}