class Compra{

    constructor(idCompra, producto, cliente, importe) {
        this.idCompra = idCompra;
        this.producto = producto;
        this.cliente = cliente;
        this.importe = importe;
    }


    CalcularIVA() {
        if (this.importe == null) {
            alert('No se puede calcular el IVA porque el importe esta vacío');
        }

        if (this.importe < 0) {
            alert('No se puede calcular el IVA porque el importe está en negativo');
        }

        if (this.importe > 0) {
            return (this.importe * 21) / 100;
        }
    }

    imprimirCompra() {
        let iva = this.CalcularIVA();
        let total = parseInt(this.importe) + parseInt(iva);
        let contenido = `<p class="text-white">ID_Compra: ${this.idCompra} </p>`;
        contenido += `<p class="text-white">Producto: ${this.producto} </p>`;
        contenido += `<p class="text-white">Cliente: ${this.cliente} </p>`;
        contenido += `<p class="text-white">Importe: ${this.importe} </p>`;
        contenido += `<p class="text-white">IVA: $ ${iva} </p>`;
        contenido += `<p class="text-white">TOTAL: $ ${total} </p>`;

        document.getElementById('infoCompra').innerHTML = contenido;
        document.getElementById('infoCompra').classList.add("bg-success");
    }
}