let AjaxApi = () => {
    document.getElementById('contenidoURL').innerHTML = '';
    document.getElementById('estado').innerHTML = '';
    let xhr = new XMLHttpRequest(); 
    
    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.LOADING) {
            if (xhr.status === 200) {
                let texto = document.createElement("p");
                texto.innerHTML = 'La solicitud está cargando';
                document.getElementById('estado').appendChild(texto);
            } else {
                console.error('Hubo un problema con la solicitud.');
            }
        }

        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {               
                var textoimg =  JSON.parse(xhr.responseText);
        
                var img = '<img src="' + textoimg.message + '" alt="" style="max-height:300px;">';
                document.getElementById('contenidoURL').innerHTML = img;

                let texto = document.createElement("p");
                texto.innerHTML = 'La solicitud generó completamente';
                document.getElementById('estado').appendChild(texto);
            } else {
                console.error('Hubo un problema con la solicitud.');
            }
        }
    };
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    xhr.send();
}

