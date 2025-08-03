let num = document.getElementById('txtnum');
let selNum = document.getElementById('selNum');
let lista = [];
let resp = document.querySelector('#resp');


let btnAd = document.getElementById("btnAd");
btnAd.addEventListener('click', Adicionar);

let btnFin = document.getElementById('btnFin');
btnFin.addEventListener('click', Finalizar);

//Função para verificar se o número inserido é válido
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }
    else{
        return false;
    }
}

//Função para verificar se o número inserido está no vetor lista
function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }
    else{
        return false;
    }
}

//Função para adicionar o número na lista e exibí-lo
function Adicionar(){
    if((isNumero(num.value)) && !isLista(num.value, lista)){

        lista.push(Number(num.value));
        let elemento = document.createElement('option')
        selNum.appendChild(elemento)
        elemento.innerHTML = `O valor ${num.value} foi adicionado a lista`
        resp.innerHTML = ``
    }
    else{
        alert(`Valor inválido ou já encontrado na lista. \n Tente novamente!`)
    }
    num.value = ``
    num.focus()
}

function Finalizar(){
    if(lista.length == 0){
        alert(`Nenhum valor encontrado. \n Adicione valores à lista!`)
    }
    else{
        resp.innerHTML += `Ao todo, temos ${lista.length} números cadastrados. <br>`

       let maior = lista[0]
       let menor = lista[0]
       let soma = 0

        for(let i in lista){
            soma += lista[i]
            if(lista[i] > maior)
            {
                maior = lista[i]
            }
            if(lista[i] < menor){
                menor = lista[i]
            }
        }

        resp.innerHTML += `O maior valor é ${maior} <br>`
        resp.innerHTML += `O menor valor é ${menor}<br>`


        resp.innerHTML += `A soma de todos os números é ${soma} <br>`
        resp.innerHTML += `A média desses valores é ${(soma/lista.length).toFixed(2)} <br>`
    }


}

