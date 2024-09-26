let section = document.getElementById("apresentacao");
let footer = document.getElementById("direitos");


let date = new Date();
let hour = date.getHours();
let year = date.getFullYear();
console.log(year);
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
 <p id="textoHome">Desde os anos 80, saborizando a vida dos paulistanos. A Panificadora 199 é um ícone da região central de São Paulo, mais precisamente no charmoso bairro de Higienópolis. Com mais de 40 anos de tradição, oferecemos aos nossos clientes uma experiência única em sabor e qualidade. </p></div>
`
footer.innerHTML = `<p id="direitos">&copy; ${year} Panificadora 199 | Todos os direitos reservados.<p/>
`
