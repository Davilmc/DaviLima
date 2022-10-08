function buscarCep() {
    const cep = document.querySelector("#cep").value;
    const url = 'https://brasilapi.com.br/api/cep/v2/'+cep;
    const classe = document.getElementsByClassName("form-control")
    
    fetch(url).then(response => response.json())
    .then(response => {
        console.log(response);
        if (response.name == "CepPromiseError"){
         alert("Cep invalido! Verifique o número digitado, caso correto preencha os dados manualmente.")   
         document.getElementById("estado").removeAttribute("readonly");
         document.getElementById("rua").removeAttribute("readonly");
         document.getElementById("bairro").removeAttribute("readonly");
         document.getElementById("cidade").removeAttribute("readonly");
        }
        else{
        document.getElementById('estado').value = response.state
        document.getElementById('cidade').value = response.city
        document.getElementById('rua').value = response.street
        document.getElementById('bairro').value = response.neighborhood
    }}
    )

}