//Requisito 7 - com ajuda do Kleverson Eller 19-C
let selectedMuda = document.querySelector('#color-palette');
selectedMuda.addEventListener('click', mudaSelected);
function mudaSelected(evento) {
  let posicaoSelected = document.querySelector('.selected');
  posicaoSelected.classList.remove('selected');
  evento.target.classList.add('selected');
}

//Requisito 8 - com ajuda da Vitoria Holanda 19-A
let pintaPixel = document.querySelectorAll('div.pixel');
for (let i = 0; i < pintaPixel.length; i += 1) {
  pintaPixel[i].addEventListener('click', mudaCor);
}

function mudaCor(click) {
  let Selected = document.querySelector('.selected');
  let trocaCor = window
    .getComputedStyle(Selected)
    .getPropertyValue('background-color');
  click.target.style.backgroundColor = trocaCor;
  console.log((click.target.backgroundColor = trocaCor));
}

//Requisito 9
let limpa = document.querySelector('#clear-board');
limpa.addEventListener('click', limpaPixels);
function limpaPixels() {
  let clear = document.getElementsByClassName('pixel');
  for (let index = 0; index < clear.length; index += 1) {
    clear[index].style.backgroundColor = 'white';
  }
}
