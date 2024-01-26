function getTimeFromSecond(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT' });
}

let interval;

function startClock() {
    let segundos = 0;

    interval = setInterval(function () {
        relogio.innerHTML = getTimeFromSecond(segundos);
        segundos++;
    }, 1000);
}

function pauseClock() {
    clearInterval(interval);
    relogio.classList.add('pausado')
}

function resetClock() {
    clearInterval(interval);
    relogio.innerHTML = getTimeFromSecond(0);
    relogio.classList.remove('pausado')
    
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar'); // Corrigido

iniciar.addEventListener('click', function (event) {
    startClock();
    
});

pausar.addEventListener('click', function (event) {
    pauseClock();
    
});

zerar.addEventListener('click', function (event) {
    resetClock();
});
