//Nombre, Apellido, Teléfono
/*
Para la resolución de las Evaluaciones deberá utilizar los archivos que encontrará en el espacio de Evaluación de la Unidad I, llamado 'Archivos para la resolución de las evaluaciones'. Este archivo deben descargarlo una sola vez y les servirá para la resolución de las 8 Evaluaciones del curso.
En el archivo unidad8.js, crear una libreta de contactos utilizando localstorage para guardar: Nombre, Apellido, Teléfono
En el archivo unidad8.html se deberán listar todos los contactos guardados, cada uno, con un botón para poder eliminarlo.
*/


var agenda = window.localStorage;
var cantidad_contactos = 0;


class contacto{
    constructor(nombre, apellido, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }

    AgregarContacto(){
        agenda.setItem(cantidad_contactos, JSON.stringify(this));
        cantidad_contactos++;
    }

    EliminarContacto(id_contacto){
        agenda.removeItem(id_contacto);
    }

    RecuperarContacto(id_contacto){
        return JSON.parse(agenda.getItem(id_contacto));
    }
}

function GuardarRegistro(){
    var apellido = document.getElementById('apellido').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;

    if(apellido == '' || nombre == '' || telefono == ''){
        alert('Algún dato está vacio. Por favor complete todos los datos!');
    }else{
        var obj = new contacto(nombre, apellido,telefono);
        obj.AgregarContacto();
        document.getElementById('apellido').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('telefono').value = '';
        alert('El registro fue guardado exitosamente!');
        MostarAgenda();
    }
}

function VaciarAgenda(){
    agenda.clear();
    alert('La agenda ha sido eliminada correctamente!');
    MostarAgenda();
}

function MostarAgenda(){
    var table = '<tr><th scope="col">#</th><th scope="col">Apellido</th><th scope="col">Nombre</th><th scope="col">Número</th><th scope="col">Acción</th></tr>';
    
    for (let i = 0; i < agenda.length; i++) {
        let valor = JSON.parse(agenda.getItem(i));

        if(valor != null){
            var texto = `<tr><td>${i}</td><td>${valor.apellido}</td><td>${valor.nombre}</td><td>${valor.telefono}</td><td><button onclick="Eliminar(${i})" class="btn btn-danger">Eliminar</button></td></tr>`;
            table = table + texto;
        }
    }
    document.getElementById('listaContactos').innerHTML = table;
}

function Eliminar(id){
    obj = new contacto();
    obj.EliminarContacto(id);
    MostarAgenda();
    alert('El registro fue eliminado exitosamente!');
}