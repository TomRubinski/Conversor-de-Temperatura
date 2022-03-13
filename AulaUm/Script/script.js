/*Função para ativar o cálculo após o click.
  Evento para desativar o refresh da página a cada vez que vai uma informação.
  Variáveis para seleção dos campos.
  If para os Cálculos.*/

function calcularTemperatura(event){
    event.preventDefault();
    var valor = document.getElementById("nmr-valor").value;
    var escalaInserida = document.getElementById("inserida").value;
    var escalaResultado = document.getElementById("resultado").value;
    var valorResultado = valor;

    if(escalaInserida == "celsius" && escalaResultado == "kelvin") {
        valorResultado = valor + 273.15
    }
    if(escalaInserida == "celsius" && escalaResultado == "fahrenheite") {
        valorResultado = (valor*1.8) + 32 
    }
    if(escalaInserida == "celsius" && escalaResultado == "rankine") {
        valorResultado = (valor*1.8) + 491.67
    }
    if(escalaInserida == "kelvin" && escalaResultado == "celsius") {
        valorResultado = valor - 273.15
    }
    if(escalaInserida == "kelvin" && escalaResultado == "fahrenheite") {
        valorResultado = ((valor-273.15)/1.8) + 32 
    }
    if(escalaInserida == "kelvin" && escalaResultado == "rankine") {
        valorResultado = ((valor-273.15)*1.8) + 491.67
    }
    if(escalaInserida == "fahrenheite" && escalaResultado == "celsius") {
        valorResultado = (valor - 32)/1.8 
    }
    if(escalaInserida == "fahrenheite" && escalaResultado == "kelvin") {
        valorResultado = ((valor-32)/1.8) + 273.15 
    }
    if(escalaInserida == "fahrenheite" && escalaResultado == "rankine") {
        valorResultado = valor + 459.67 
    }
    if(escalaInserida == "rankine" && escalaResultado == "celsius") {
        valorResultado = (valor-491.67)/1.8
    }
    if(escalaInserida == "rankine" && escalaResultado == "kelvin") {
        valorResultado = ((valor-491.67)/1.8) + 273.15
    }
    if(escalaInserida == "rankine" && escalaResultado == "fahrenheite") {
        valorResultado = valor-459.67 
    }
    document.getElementById('saida').value = valorResultado; // Saída do resultado no campo Resultado
}