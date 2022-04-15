window.onload = function () {
  //! Requisito 2 e (12 - com ajuda do Kleverson Eller 19-C)
  /* 256, pq as cores vao de 0 a 255, mas como quero incluir a cor 255 precisa ser ate o 256 para a função  Math.random() dar certo
  A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado.
  A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
    */
  const pixels = document.querySelectorAll('#color-palette div');
  for (let i = 1; i < pixels.length; i += 1) {
    console.log(geraCor());
    pixels[i].style.backgroundColor = geraCor();
  }
  function geraCor() {
    const cor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;
    return cor;
  }
};

//! Requisito 4 - 5
const valorEntrada = 5;
function painel(quantPixels) {
  const painel = document.querySelector('#pixel-board');
  for (let index = 1; index <= quantPixels; index += 1) {
    const criaLinha = document.createElement('ol');
    criaLinha.classList.add('quadrado-linha');
    for (let i = 1; i <= quantPixels; i += 1) {
      const criaPixel = document.createElement('li');
      criaPixel.classList.add('pixel');
      criaPixel.style.backgroundColor = 'white';
      criaLinha.appendChild(criaPixel);
    }
    painel.appendChild(criaLinha);
  }
}
painel(valorEntrada);

//! Requisito 7 - com ajuda do Kleverson Eller 19-C
const selectedMuda = document.querySelector('#color-palette');
selectedMuda.addEventListener('click', mudaSelected);
function mudaSelected(evento) {
  const posicaoSelected = document.querySelector('.selected');
  posicaoSelected.classList.remove('selected');
  evento.target.classList.add('selected');
}

//! Requisito 8

const possicaoSelecionada = document.querySelector('#pixel-board');
possicaoSelecionada.addEventListener('click', (elemento) => {
  const trocaCor = document.querySelector('.selected').style.backgroundColor;
  const possicao = elemento.target;
  if (possicao.classList == 'pixel') {
    possicao.style.backgroundColor = trocaCor;
  }
});

//! Requisito 9
const limpa = document.querySelector('#clear-board');
limpa.addEventListener('click', limpaPixels);
function limpaPixels() {
  const clear = document.getElementsByClassName('pixel');
  for (let index = 0; index < clear.length; index += 1) {
    clear[index].style.backgroundColor = 'white';
  }
}

//! Requisito 10 e 11
// cria as linhas e colunas novamente conforma o numero do input
const botaoVqv = document.querySelector('#generate-board');
botaoVqv.addEventListener('click', tamPainel);
function tamPainel() {
  const quadroPixel = document.querySelectorAll('#pixel-board ol');
  const quantPixel = document.querySelector('#board-size').value;
  for (const i of quadroPixel) {
    const painelPixel = document.querySelector('#pixel-board');
    painelPixel.removeChild(i);
  }
  if (quantPixel < 5) {
    alert('Board inválido!');
    const quadro = document.querySelector('#pixel-board');
    for (let index = 1; index <= 5; index += 1) {
      const linha = document.createElement('ol');
      linha.classList.add('quadrado-linha');
      for (let indi = 1; indi <= 5; indi += 1) {
        const criaPixel = document.createElement('li');
        criaPixel.classList.add('pixel');
        criaPixel.style.backgroundColor = 'white';
        linha.appendChild(criaPixel);
      }
      quadro.appendChild(linha);
    }
  } else if (quantPixel > 50) {
    alert('Board inválido!');
    const quadro = document.querySelector('#pixel-board');
    for (let index = 1; index <= 50; index += 1) {
      const linha = document.createElement('ol');
      linha.classList.add('quadrado-linha');
      for (let i = 1; i <= 50; i += 1) {
        const pixelNovo = document.createElement('li');
        pixelNovo.classList.add('pixel');
        pixelNovo.style.backgroundColor = 'white';
        linha.appendChild(pixelNovo);
      }
      quadro.appendChild(linha);
    }
  } else {
    const quadro = document.querySelector('#pixel-board');
    for (let index = 1; index <= quantPixel; index += 1) {
      const linha = document.createElement('ol');
      linha.classList.add('quadrado-linha');
      for (let i = 1; i <= quantPixel; i += 1) {
        const pixelNovo = document.createElement('li');
        pixelNovo.classList.add('pixel');
        pixelNovo.style.backgroundColor = 'white';
        linha.appendChild(pixelNovo);
      }
      quadro.appendChild(linha);
    }
  }
}
