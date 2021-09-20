let listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg",
    "https://i.ytimg.com/vi/WwW1nqV3pI0/movieposter_en.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg"
];
  
let button = document.querySelector("#button")

let buttonRemove = "<button value='remove' id='buttonRemove' onclick='removerButton()'> Remover</button>" // button para remover os filmes
let exibirFilmes = document.querySelector("#filmes") // div que listará os posters dos filmes

button.addEventListener('click', inserirFilmes)


function inserirFilmes() {

    let jaExiste = document.querySelector("#jaExiste") // h3 para mensagem se houver catálogos com links iguais
    let filmeInserido = document.querySelector("#linkText").value // valor do input url armazenado na variável
    let descricao = document.querySelector("#filmeDesc").value
    
    
    if(listaFilmes.includes(filmeInserido)) { 
        
        jaExiste.innerHTML = "Este filme já existe em nosso catálogo"

    } else if(filmeInserido == "" || descricao == "") {
        alert("Esqueceu de preencher algo!")

    }else {
        listaFilmes.push(filmeInserido)
        
        exibirFilmes.innerHTML += "<div>" + buttonRemove + "<br> <img src=" + listaFilmes[listaFilmes.length -1] + "> <p>" + descricao + "</p> </div>"
    }

    document.querySelector("#linkText").value = ""
}

function removerButton(listaFilmes) {
    const apaga = document.querySelector("#filmes")

    apaga.removeChild(apaga.childNodes[0])

}



for (let i = 0; i < listaFilmes.length; i++) {
    
    exibirFilmes.innerHTML += "<div>" + buttonRemove + "<br><img src=" + listaFilmes[i] + ">"
}
  