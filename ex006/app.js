function altura(){   
    let peso = document.getElementById("resposta").value
    let altura = (72.7*peso) - 58
    document.getElementById("peso").innerText = altura + " seu peso ideal"
}