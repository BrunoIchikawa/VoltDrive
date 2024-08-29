function toggleMenu() {
  var menuContent = document.getElementById('menu-content');

  if (menuContent.style.display ==='block') {
      menuContent.style.display = 'none';
  } else {
      menuContent.style.display = 'block';
  }
}


// let cont = 1;
// const tempo = 2500; // Tempo em milissegundos

// const imagens = [
//     "./src/assets/img/car-branco-bg.png",
//     "./src/assets/img/car-cinza-bg.png",
//     "./src/assets/img/car-cinza.png",
//     "./src/assets/img/car-verme.png"
// ];

// const botoes = document.querySelectorAll('.dot');
// const slide = document.querySelector('[name="slide"]');

// let start = setInterval(mostra, tempo);

// function mostra() {
//     // Atualiza a imagem do slide
//     slide.src = imagens[cont - 1];

//     // Atualiza a cor dos botões
//     botoes.forEach((botao, index) => {
//         botao.classList.toggle('active', index + 1 === cont);
//     });

//     // Atualiza o contador
//     cont = (cont < 4) ? cont + 1 : 1;
// }

// function posiciona(x) {
//     clearInterval(start);
//     cont = x;
//     mostra();
//     start = setInterval(mostra, tempo);
// }
