// acessa root definada no index.html
const app = document.getElementById('root')
console.log(app)
// cria imagem vazia
const logo = document.createElement('img')
// preenche imagem
logo.src = 'logo.png'
// cria container
const container = document.createElement('div')
container.setAttribute('class','container')
// inserindo logo e container no website
app.appendChild(logo)
app.appendChild(container)

// cria nova variavel de requisicao e associa objeto XMLHttpRequest 
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

// abrindo conexao, utilizando requisicao GET no URL endpoint
request.open('GET', 'https://www.breakingbadapi.com/api/characters', true)

// acessa dados da requisicao
request.onload = function(){
    //TODO: codigo de acesso aos dados JSON
    // inicializa acesso aos dados JSON como matriz de objetos .js
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400){
        data.forEach(character => {
            // cria div da classe card
            const card = document.createElement('div')
            card.setAttribute('class','card')

            // cria h1 e define texto a partir dos dados do filme
            const h1 = document.createElement('h1')
            h1.textContent = character.name

            // cria p e define texto a partir da descricao do filme
            const p = document.createElement('p')
            character.nickname = character.nickname.substring(0,300) //max 300 chars
            p.textContent = `${character.nickname}...`

            // associa cards ao container
            container.appendChild(card)

            // associa a toda card um h1 e um p
            card.appendChild(h1)
            card.appendChild(p)

        });    
    } else{
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = 'Nahhh, algo não esta funcionando!'
        app.appendChild(errorMessage)
    }    
}    
request.send()


