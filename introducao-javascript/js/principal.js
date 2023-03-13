var titulo = document.querySelector(".titulo");
titulo.textContent = "aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente"); 

for (var i = 0; i < pacientes.length; i++) { // no loop vc declara primeiro a variavel do item o tamanho que ela chegue e depois o ++ para adicionar um numero a cada item percorrido

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); //serve para selecionar o que voce quer la no html 
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura"); //serve para selecionar o que voce quer la no html
    var altura = tdAltura.textContent; //depois de voce selecionar, voce indica por nome o que vai ser aquilo que foi selecionado acima
    
    var tdImc = paciente.querySelector(".info-imc"); //serve para selecionar o que voce quer la no html
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        console.log("peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Invalido"
        paciente.style.backgroundColor = "orange"; // serve para estilizar a pagina no javascript caso o peso esteja errado
    }
    
    if(!alturaEhValida){
        console.log("altura invalida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Invalida"
        paciente.classList.add("paciente-invalido"); // serve do mesmo jeito para estilizar a pagina no javascript caso a altura esteja errada usando o estilo do css
    }
    
    
    if ( alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
    }
    function validaPeso(peso){
        if(peso >= 0 && peso <= 1000){
            return true;
        }else{
            return false;
        }
    }
    function validaAltura(altura){
        if(altura >= 0 && altura <= 3.00){
            return true;
        }else{
            return false;
        }
    }
    function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }

