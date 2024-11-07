const mais = document.getElementById('adicionar')
const reset = document.getElementById('resete')
const menos = document.getElementById('diminuir')
const numero_tela = document.getElementById('contador')


var contador = 0

mais.addEventListener('click',(e)=>{
    contador ++
    numero_tela.innerHTML=`${contador}`
    if(contador >= "1"){
        numero_tela.style.color='green'
    }
    if(contador==0){
        numero_tela.style.color ='orange'
    }

})

menos.addEventListener('click',(e)=>{
    contador --
    numero_tela.innerHTML=`${contador}` 
    if(contador <= "-1"){
        numero_tela.style.color='red'
    }
    if(contador==0){
        numero_tela.style.color ='orange'
    }
})

reset.addEventListener('click',(e)=>{
    contador=0
    numero_tela.innerHTML=`${contador}`
    if(contador==0){
        numero_tela.style.color ='orange'
    }
})

if(contador==0){
    numero_tela.style.color ='orange'
}