const key = "58cf28f6090517881d806fa553aef58b"

function colocarDadosNaTela(dados) {
    

    document.querySelector("h4").innerHTML = `Tempo em ${dados.name}`
    document.querySelector(".temp").innerHTML = `${(dados.main.temp).toFixed(1)}°C`
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".min-max").innerHTML = `Mínima de: ${(dados.main.temp_min).toFixed(1)}°C / Máxima de: ${(dados.main.temp_max.toFixed(1))}°C`
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resp => resp.json())

    console.log(dados)
    colocarDadosNaTela(dados, )
}


function cliqueiNoBotao() {
    const cidade = document.querySelector("input").value

    buscarCidade(cidade)
}

