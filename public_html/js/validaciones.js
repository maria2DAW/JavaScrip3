function validarForm()
{
    var verificar = true;
    var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    
    var formulario = document.getElementById("contacto_frm");
    var nombre = document.getElementById("nombre");
    var edad = document.getElementById("edad");
    var email = document.getElementById("email");
    var masculino = document.getElementById("M");
    var femenino = document.getElementById("F");
    var asunto = document.getElementById("asunto");
    var comentarios = document.getElementById("comentarios");
    
    if(!nombre.value)
    {
        alert("El campo Nombre es requerido.");
        nombre.focus();
        verificar = false;
    }
    
    else if(!expRegNombre.exec(nombre.value))
    {
        alert("El campo Nombre sólo acepta letras y espacios en blanco.");
        nombre.focus();
        verificar = false;
    }
    
    else if(!edad.value)
    {
        alert("El campo Edad es requerido.");
        edad.focus();
        verificar = false;
    }
    
    else if(isNaN(edad.value)) //isNotaNumber
    {
        alert("El campo Edad sólo acepta números.");
        edad.focus();
        verificar = false;
    }
    
    else if(edad.value < 18 || edad.value > 60)
    {
        alert("Debes estar en un rango de edad entre 18 y 60 años.");
        edad.focus();
        verificar = false;
    }
    
    else if(!masculino.checked && !femenino.checked)
    {
        alert("El campo Sexo es requerido.");
        femenino.focus();
        verificar = false;
    }
    
    else if(!email.value)
    {
        alert("El campo E-mail es requerido.");
        email.focus();
        verificar = false;
    }
    
    else if(!expRegEmail.exec(email.value))
    {
        alert("El campo E-mail no es válido.");
        nombre.focus();
        verificar = false;
    }
    
    else if(!asunto.value)
    {
        alert("El campo Asunto es requerido.");
        asunto.focus();
        verificar = false;
    }
    
    else if(!comentarios.value)
    {
        alert("El campo Comentarios es requerido.");
        comentarios.focus();
        verificar = false;
    }
    
    else if(comentarios.value.length > 255) //Se verifica que sea menor de 255 caracteres debido a que en 
                                    //las bases de datos esta es la cantidad máxima que tiene un varchar.
                                    //Si es mayor a esta cantidad debería ser un text o un long char
    {
        alert("El campo Comentarios no puede tener más de 255 caracteres.");
        comentarios.focus();
        verificar = false;
    }
    
    if(verificar)
    {
        alert("Formulario enviado");
        document.contacto_frm.submit();
    }
    
}

function limpiarForm()
{
    alert("Limpiando");
    document.getElementById("contacto_frm").reset();
}

window.onload = function()
{
    var botonValidar, botonLimpiar;
    
    //Formas de acceder a un elemento en JavaScript
    //1-Por el método "getElementById"
    botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarForm;
    
    //2-Por ruta a través del name de las etiquetas HTML
    botonValidar = document.contacto_frm.enviar_btn;    
    botonValidar.onclick = validarForm;
}