let capture;
let img;
let hasTakenPhoto = false;

function setup() {
    // Cria a tela p5.js dentro da div com ID 'p5-canvas'
    let canvas = createCanvas(640, 480);
    canvas.parent('p5-canvas');
    
    // Acessa a webcam
    capture = createCapture(VIDEO);
    capture.hide();

    // Adiciona os círculos vermelhos nas quatro quinas
    createDots();
    
    // Adiciona os riscos verdes ao redor do canvas
    createStripes();

    // Adiciona funcionalidade ao botão "Tirar Foto"
    document.getElementById('snap').addEventListener('click', takePhoto);
}

function draw() {
    background(255);

    if (hasTakenPhoto && img) {
        image(img, 0, 0, 640, 480);
    } else {
        // Exibe o vídeo da webcam
        image(capture, 0, 0, 640, 480);
    }
}

function createDots() {
    // Cria os círculos vermelhos nas quinas da moldura
    createDiv('').class('red-dot top-left').parent('p5-canvas');
    createDiv('').class('red-dot top-right').parent('p5-canvas');
    createDiv('').class('red-dot bottom-left').parent('p5-canvas');
    createDiv('').class('red-dot bottom-right').parent('p5-canvas');
}

function createStripes() {
    // Cria os riscos verdes ao redor da moldura
    createDiv('').class('green-stripe top-stripe').parent('p5-canvas');
    createDiv('').class('green-stripe bottom-stripe').parent('p5-canvas');
    createDiv('').class('green-stripe left-stripe').parent('p5-canvas');
    createDiv('').class('green-stripe right-stripe').parent('p5-canvas');
}

function takePhoto() {
    // Captura a imagem da webcam e a salva
    img = capture.get();
    hasTakenPhoto = true;
}
