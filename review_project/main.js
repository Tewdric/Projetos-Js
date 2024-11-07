
const reviews = [
    {   id:1,
        nome:'Pikachu',
        profissao:'Pokemon',
        img: 'https://claudia.abril.com.br/wp-content/uploads/2020/01/filtro-pikachu-snapchat-1.jpg?crop=1&resize=1212,909',
        texto:'testando mano'
    },
    {   id:2,
        nome:'Scooby',
        profissao:'Cachorro Petulante',
        img: 'https://i.pinimg.com/736x/e6/5e/98/e65e981ef756610dd0554d0edda3f4ff.jpg',
        texto:'Scooby doooooo'
    },
    {   id:3,
        nome:'Capitão Caverna',
        profissao:'Porrete',
        img: 'https://www.portallos.com.br/wp-content/uploads/2011/05/capitao-caverna.jpg',
        texto:'CApitãaaaaaao'
    }
]

const autor = document.getElementById('autor')
const img = document.getElementById('img_pessoa')
const profissao = document.getElementById('profissao')
const texto = document.getElementById('texto')

const prevBTN = document.getElementById('btm-prev')
const nextBTN = document.getElementById('btm-next')
const randomBTN = document.getElementById('random')

let contador = 0

nextBTN.addEventListener('click',function(){
    contador++
    const item = reviews[contador]

    img.src=item.img
    autor.innerHTML=item.nome
    profissao.innerHTML=item.profissao
    texto.innerHTML=item.texto

    if(contador==2){
        nextBTN.style.visibility='hidden'
    }
    if(contador >0){
        prevBTN.style.visibility='visible'
    }

})
prevBTN.addEventListener('click',function(){
    contador--
    const item = reviews[contador]

    img.src=item.img
    autor.innerHTML=item.nome
    profissao.innerHTML=item.profissao
    texto.innerHTML=item.texto
    
    if(contador == 0){
        prevBTN.style.visibility='hidden'
    }
    if(contador <2){
        nextBTN.style.visibility='visible'
    }
})

    
if(contador == 0){
    prevBTN.style.visibility='hidden'
}

if(contador==2){
    nextBTN.style.visibility='hidden'
}

randomBTN.addEventListener('click',function(){
    let aleatorio = Math.round(Math.random()*2)
    console.log(aleatorio)
    const item = reviews[aleatorio]

    img.src=item.img
    autor.innerHTML=item.nome
    profissao.innerHTML=item.profissao
    texto.innerHTML=item.texto
})