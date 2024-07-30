class Productos{

    constructor(codigo, categoria, nombre, precio){
        this.codigo = codigo;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
    }


    ImprimeDatos(){
        let contenido = `<p>Código: ${this.codigo} </p>`;
        contenido += `<p>Categoria: ${this.categoria} </p>`;
        contenido += `<p>Nombre: ${this.nombre} </p>`;
        contenido += `<p>Precio: ${this.precio} </p>`;

        document.getElementById('infoProducto').innerHTML = contenido;
        console.log(contenido);
    }


}