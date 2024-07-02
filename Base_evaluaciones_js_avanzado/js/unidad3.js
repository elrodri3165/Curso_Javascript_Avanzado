let Ajax = () => {
    document.getElementById('contenidoURL').innerHTML = '';
    let xhr = new XMLHttpRequest(); 

    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.LOADING) {
            if (xhr.status === 200) {
                document.getElementById('estado').innerHTML = 'La solicitud está cargando';
            } else {
                console.error('Hubo un problema con la solicitud.');
            }
        }

        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('estado').innerHTML = 'La solicitud está completada';
                document.getElementById('contenidoURL').innerHTML = xhr.responseText;
            } else {
                console.error('Hubo un problema con la solicitud.');
            }
        }
    };
    xhr.open('GET', 'unidad3.txt', true);
    xhr.send();
}