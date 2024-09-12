let section = document.getElementById("apresentacao");

let date = new Date();
let hour = date.getHours();
let boasVindas = "";

if (hour<12){
    boasVindas ="Bom dia"
} else if (hour>=12 && hour<18){
    boasVindas ="Boa Tarde"
} else {
    boasVindas ="Boa Noite"
}

section.innerHTML =`
<div id="apresentacao">
<h1> ${boasVindas} !!! Bem vindo a Panificadora 199!!! </h1> <br>
 <p id="textoHome">Desde os anos 80, saborizando a vida dos paulistanos. A Panificadora 199 é um ícone da região central de São Paulo, mais precisamente no charmoso bairro de Higienópolis. Com mais de 40 anos de tradição, oferecemos aos nossos clientes uma experiência única em sabor e qualidade. Nossos pães, doces e salgados são preparados com ingredientes frescos e receitas exclusivas, que conquistaram o paladar de gerações e fazendo com que nossos clientes se tornassem uma rede amigos.

Além de atender aos nossos clientes fiéis, também atendemos empresas da região, oferecendo um serviço personalizado de marmitex e encomendas para eventos. Faça parte da nossa história e saboreie o melhor de uma tipica padaria Paulistana!</p>
`
