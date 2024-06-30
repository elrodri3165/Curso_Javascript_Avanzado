let Validar = () =>{
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let correo_electronico = document.getElementById('correo_electronico').value;

    const nombreRegex = /^[a-zA-Z]{3,10}$/;
    const apellidoRegex = /^[a-zA-Z\s]{3,20}$/;
    const edadRegex = /^(?:[1-9][0-9]?|90)$/;
    const emailRegex = /^[a-zA-Z0-9.]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,}$/;

    let validacion_nombre = false;
    let validacion_apellido = false;
    let validacion_edad = false;
    let validacion_email = false;

    let mensaje = '';

    if(nombreRegex.test(nombre)){
        validacion_nombre = true;
    }else{
        mensaje += 'El nombre no es correcto, solo debe tener letras. (a-z A-Z).';
    }

    if(apellidoRegex.test(apellido)){
        validacion_apellido = true;
    }else{
        mensaje += ' El apellido no es correcto, solo debe tener letras. (a-z A-Z).';
    }

    if(edadRegex.test(edad)){
        validacion_edad = true;
    }else{
        mensaje += ' La edad no es correcto, solo debe tener valores numéricos entre 1 y 90.';
    }

    if(emailRegex.test(correo_electronico)){
        validacion_email = true;
    }else{
        mensaje += ' El correo electrónico no es correcto, debe tener un formato de correo correcto xxxx@xxxx.xx.';
    }

    if(validacion_apellido === true && validacion_nombre === true && validacion_edad === true && validacion_email === true){
        alert('La validación se hizo correctamente!');
        return true;
    }else{
        alert('Ocurrió algun error. Por favor revisar los siguientes campos. ' + mensaje);
        return false;
    }
}


let LimpiarForm = () =>{
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('correo_electronico').value = '';

}