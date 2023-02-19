const ligaDesliga = document.getElementById('ligaDesliga');
const desligar = document.getElementById('desligada');
const lampada = document.getElementById('lampada');

function lampadaEstaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}

function ligarLampada(){
    if(!lampadaEstaQuebrada()){
        lampada.src = './assets/imagens/ligada.jpg';
    }
}

function desligarLampada(){
    if(!lampadaEstaQuebrada()){
        lampada.src = './assets/imagens/desligada.jpg';
    }
}

function quebrarLampada(){
    lampada.src = './assets/imagens/quebrada.jpg';
}

function ligarDesligar(){
    if(ligaDesliga.textContent == 'Ligar'){
        ligarLampada();
        ligaDesliga.textContent = 'Desligar';
    } else {
        desligarLampada();
        ligaDesliga.textContent = 'Ligar';
    }
}

ligaDesliga.addEventListener('click', ligarDesligar);
// ligaDesliga.addEventListener('click', desligarLampada);
lampada.addEventListener('mouseover', ligarLampada);
lampada.addEventListener('mouseleave', desligarLampada);
lampada.addEventListener('dblclick', quebrarLampada);