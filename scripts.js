function showSheep() {
    const sheepLeft = document.getElementById('ovelha-left');
    const sheepRight = document.getElementById('ovelha-right');

    sheepLeft.style.display = 'block';
    sheepRight.style.display = 'block';

    setTimeout(() => {
        sheepLeft.style.display = 'none';
        sheepRight.style.display = 'none';
    }, 5000); // As ovelhas desaparecerão após 5 segundos
}

setInterval(showSheep, 30000); // Chama a função a cada 30 segundos
