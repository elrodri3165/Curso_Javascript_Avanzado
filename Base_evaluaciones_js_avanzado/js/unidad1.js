let Ejecutar = (numero1, numero2, simbolo) => {
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;

    if(numero1 === null || numero2 === null || numero1 === '' || numero2 === ''){
        alert('alguno de los números está vacio. Por favor complete ambos');
    }else{

        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        if(simbolo === '+'){
            document.getElementById('resultado').value = numero1 + numero2;
            document.getElementById('numero1').value = null;
            document.getElementById('numero2').value = null;
        }

        if(simbolo === '-'){
            document.getElementById('resultado').value = numero1 - numero2;
            document.getElementById('numero1').value = null;
            document.getElementById('numero2').value = null;
        }

        if(simbolo === '*'){
            document.getElementById('resultado').value = numero1 * numero2;
            document.getElementById('numero1').value = '';
            document.getElementById('numero2').value = '';
        }

        if(simbolo === '/'){
            if(numero2 === 0){
                alert('La operación no puede realizarse. No se puede dividir por 0, por favor intente con otro número');
                document.getElementById('numero2').value = null;
            }else{
                document.getElementById('resultado').value = numero1 / numero2;
                document.getElementById('numero1').value = null;
                document.getElementById('numero2').value = null;
            }
        }

    }


}