class Productos{

    constructor(codigo, categoria, nombre, precio){
        this.codigo = codigo;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
    }


    ImprimeDatos(){
        let contenido = `<p class="border bg-success">Código: ${this.codigo} </p>`;
        contenido += `<p class="border bg-success">Categoria: ${this.categoria} </p>`;
        contenido += `<p class="border bg-success">Nombre: ${this.nombre} </p>`;
        contenido += `<p class="border bg-success">Precio: ${this.precio} </p>`;
        contenido += `<br class="border bg-success"></br>`;

        document.getElementById('infoProducto').innerHTML = contenido;
    }


}