function iniciarContagemRegressiva(duracao) {
    const timer = document.getElementById('timer');
    let tempoRestante = duracao;

    const intervalo = setInterval(() => {
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;

        timer.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            timer.textContent = "Expirado!";
        } else {
            tempoRestante--;
        }
    }, 1000);
}

// Inicia com 20 minutos (1200 segundos)
iniciarContagemRegressiva(1200);

