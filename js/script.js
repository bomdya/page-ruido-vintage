document.getElementById ("enviar").addEventListener("click", validaForm)

function validaForm(){
    if (document.getElementById("nome-input").value != "" && document.getElementById("senha").value != ""){
    alert ("Prontinho! Você já está cadastrade!")
    } else{
      alert("Por favor, preencha todos os campos!")
    } 
}
