class Compra{
    constructor(id){
        this.id = id;
    }

    RevisarStock(){
        this.Ajax('revisar');
    }

    FinalizarCompra(){
        this.Ajax('finalizar');
    }

    Ajax(action){
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        
        document.getElementById('contenido').innerHTML = '';
        let xhr = new XMLHttpRequest(); 

        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.OPENED) {
                myModal.show();
                document.getElementById('estado').innerHTML = 'Por favor aguarde mientras revisamos los datos.';
            }
            else if (xhr.readyState === XMLHttpRequest.LOADING) {
                document.getElementById('estado').innerHTML = 'Procesando la solicitud...';
            }

            else if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    document.getElementById('estado').innerHTML = 'La solicitud está completada.';
                    document.getElementById('contenido').innerHTML = xhr.responseText;
                    var btn = document.getElementById('btn-finalizar');
                    btn.removeAttribute('disabled');
                    myModal.hide();
                } else {
                    console.error('Hubo un problema con la solicitud.');
                    document.getElementById('estado').innerHTML = 'Hubo un problema con la solicitud.';
                    myModal.hide();
                }
            }
        };
        xhr.open('GET', 'ajax.php?action='+ action +'&id=' + this.id, true);
        xhr.send();
    }

}

var compra;

let Comprar = (id) => {
    //alert(id);
    compra = new Compra(id);
    compra.RevisarStock();
}

let FinalizarCompra = () => {
    compra.FinalizarCompra();
}