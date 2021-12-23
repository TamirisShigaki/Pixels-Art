window.onload = function () {
  //! Requisito 4 - 5

  let valorEntrada = 5;

  function painel(quantPixels) {
    let painel = document.querySelector('#pixel-board');
    for (let index = 1; index <= quantPixels; index += 1) {
      let criaColuna = document.createElement('ol');
      criaColuna.classList.add('quadrado-linha');
      for (let i = 1; i <= quantPixels; i += 1) {
        let criaLinha = document.createElement('li');
        criaLinha.classList.add('pixel');
        criaLinha.style.backgroundColor = 'white';

        criaColuna.appendChild(criaLinha);
      }

      painel.appendChild(criaColuna);
    }
  }

  painel(valorEntrada);

  //! Requisito 7 - com ajuda do Kleverson Eller 19-C
  let selectedMuda = document.querySelector('#color-palette');
  selectedMuda.addEventListener('click', mudaSelected);
  function mudaSelected(evento) {
    let posicaoSelected = document.querySelector('.selected');
    posicaoSelected.classList.remove('selected');
    evento.target.classList.add('selected');
  }

  //! Requisito 8 - com ajuda da Vitoria Holanda 19-A
  let pintaPixel = document.querySelectorAll('.quadrado-linha .pixel');
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

  //! Requisito 9
  let limpa = document.querySelector('#clear-board');
  limpa.addEventListener('click', limpaPixels);
  function limpaPixels() {
    let clear = document.getElementsByClassName('pixel');
    for (let index = 0; index < clear.length; index += 1) {
      clear[index].style.backgroundColor = 'white';
    }
  }

  //! Requisito 10 e 11
  // cria as linhas e colunas novamente conforma o numero do input

  let botaoVqv = document.querySelector('#generate-board');
  botaoVqv.addEventListener('click', tamPainel);

  function tamPainel() {
    let quadroPixel = document.querySelectorAll('#pixel-board ol');
    let quantPixel = document.querySelector('#board-size').value;
    for (let i of quadroPixel) {
      let painelPixel = document.querySelector('#pixel-board');
      painelPixel.removeChild(i);
    }
    if (quantPixel < 5) {
      alert('Board inválido!');
      let quadro = document.querySelector('#pixel-board');
      for (let index = 1; index <= 5; index += 1) {
        let criaColuna = document.createElement('ol');
        criaColuna.classList.add('quadrado-linha');
        for (let indi = 1; indi <= 5; indi += 1) {
          let criaLinha = document.createElement('li');
          criaLinha.classList.add('pixel');
          criaLinha.style.backgroundColor = 'white';

          criaColuna.appendChild(criaLinha);
        }

        quadro.appendChild(criaColuna);
      }
    } else if (quantPixel > 50) {
      alert('Board inválido!');
      let quadro = document.querySelector('#pixel-board');
      for (let index = 1; index <= 50; index += 1) {
        let colunaNova = document.createElement('ol');
        colunaNova.classList.add('quadrado-linha');
        for (let i = 1; i <= 50; i += 1) {
          let linhaNova = document.createElement('li');
          linhaNova.classList.add('pixel');
          linhaNova.style.backgroundColor = 'white';

          colunaNova.appendChild(linhaNova);
        }

        quadro.appendChild(colunaNova);
      }
    } else {
      let quadro = document.querySelector('#pixel-board');
      for (let index = 1; index <= quantPixel; index += 1) {
        let colunaNova = document.createElement('ol');
        colunaNova.classList.add('quadrado-linha');
        for (let i = 1; i <= quantPixel; i += 1) {
          let linhaNova = document.createElement('li');
          linhaNova.classList.add('pixel');
          linhaNova.style.backgroundColor = 'white';

          colunaNova.appendChild(linhaNova);
        }

        quadro.appendChild(colunaNova);
      }
    }
  }

  //! Requisito 12 - com ajuda do Kleverson Eller 19-C
  /* 256, pq as cores vao de 0 a 255, mas como quero incluir a cor 255 precisa ser ate o 256 para a função  Math.random() dar certo
A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. 
A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
  */

  let pixels = document.querySelectorAll('#color-palette div');

  for (let i = 1; i < pixels.length; i += 1) {
    console.log(geraCor());
    pixels[i].style.backgroundColor = geraCor();
  }

  function geraCor() {
    let cor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    return cor;
  }
};
