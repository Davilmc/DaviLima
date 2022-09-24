function nasceu() {
    let ano = 2022;
    let nasceu = document.getElementById('nasceu').value;
    let idade= ano - nasceu;
    alert(idade)
    document.querySelector("#idade").innerText = idade;
    
}