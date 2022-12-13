function altura(){   
    let h = document.getElementById("resposta").value
    let hh = document.getElementById("resposta").value
    let homem = (72.7*hh) - 58
    let mulher = (62.1*h) - 44.7
    document.getElementById("hh").innerText = homem + " se você for homem esse é seu peso ideal"
    document.getElementById("h").innerText = mulher+ " se você for mulher esse é seu peso ideal"
}