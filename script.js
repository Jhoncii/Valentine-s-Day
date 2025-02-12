let noButtonState = 0;
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';
    document.getElementById('sadGifContainer').style.display = 'none'; // Ocultar GIFs tristes
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡SIUUUUUUUUU VAMOSSS!';
    showHappyGifs();
});

document.getElementById('noBtn').addEventListener('click', function() {
    const noMessages = [
        '¿SEGURAAA?',
        '"POR FAVOR MICAELITA, DIGA QUE SÍ"',
        '"VAMOS, POR FAVOR"',
        '"NO ME HAGA ESTO :("',
        '"AAAAAAAAAAAA"',
        '"AMOCHIS SE LO RUEGOOOO"',
        '"SIN USTED NO TIENE SENTIDO"',
        '"ME ROMPERÁ EL CORAZÓN"',
        '"DIGA QUE SÍ PORFIS"',
        '"NO SEA CRUEL :("',
        '"ES MI ÚNICA ESPERANZA"'
    ];

    if (noButtonState < 11) {
        document.getElementById('gifContainer').style.display = 'none';
        document.getElementById('sadGifContainer').style.display = 'block';
        document.getElementById('noBtn').innerHTML = noMessages[noButtonState];
        showSadGif(noButtonState + 1);
        noButtonState++;
        increaseYesButtonSize();
    } else {
        document.getElementById('noBtn').innerHTML = 'Por favor, di que sí';
        noButtonState = 0;
    }
});

function showHappyGifs() {
    const container = document.getElementById('happyGifContainer');
    container.innerHTML = '';
    for (let i = 1; i <= 8; i++) {
        let img = document.createElement('img');
        img.src = `amor${i}.gif`;
        img.classList.add('floatingGif');
        container.appendChild(img);
    }
}

function showSadGif(index) {
    const container = document.getElementById('sadGifContainer');
    container.innerHTML = `<img src="llorar${index}.gif" class="floatingGif">`;
}

function increaseYesButtonSize() {
    const siBtn = document.getElementById('siBtn');
    let currentSize = parseInt(window.getComputedStyle(siBtn).fontSize);
    siBtn.style.fontSize = (currentSize + 5) + 'px';
    siBtn.style.padding = (parseInt(siBtn.style.padding || 10) + 5) + 'px';
}
