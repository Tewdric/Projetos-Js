const select = document.getElementById("cor");
const body = document.body


select.addEventListener('click',(e)=>{
    const opcaoValor = select.options[select.selectedIndex].value;

    if(opcaoValor){
       body.style.backgroundColor=opcaoValor
    }
})