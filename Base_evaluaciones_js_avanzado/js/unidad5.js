function animarCuadrado(cx, cy, radius) {
  return new Promise((resolver, rechazar) => {
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
        resolver(div);
      });
    }, 0);

    if (!div) {
      rechazar('Error al crear el div');
    }
  });
}

function Ejecutar(){
  animarCuadrado(300, 100, 100)
  .then(div => {
    div.classList.add('mensaje');
    div.append("Unidad 5");
  })
  .catch(error => {
    console.error('Error:', error);
  });
}