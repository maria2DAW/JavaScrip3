function validarForm()
{
    alert("Validando");
    document.contacto_frm.submit();
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