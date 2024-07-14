function ejecutar() {
  let ejecutar = new Promise((resolver, reject) => {
    animarCuadrado(300, 100, 100, div => {
      div.classList.add('mensaje');
      div.append("Unidad 5");
    });
  })

  ejecutar .then(resultado => {
    console.log(resultado);
    // La operación se completó con éxito, resultado contiene el valor resuelto console.log(resultado);
    }) .catch(error => {
    // La operación falló, error contiene el motivo del rechazo
    console.error(error);
    });
}

function animarCuadrado(cx, cy, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'cuadrado';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';

    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      callback(div);
    });
  }, 0);
}



