function combustivel(){
    let dinheiro = document.getElementById("resposta").value
    let combustivel = dinheiro / 5
    document.getElementById("dinheiro").innerText = combustivel + " litro" + "e seu carro andará: " +combustivel*20+"km"
}

