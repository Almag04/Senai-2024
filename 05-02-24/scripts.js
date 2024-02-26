const key = "0c4a0f02c6bd7116957345093273509f"
function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "umidade:" + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = "http://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}
async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}