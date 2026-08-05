//======================================================
// CONFIGURACIÓN
//======================================================

// Cambia este número por el tuyo.
// Formato: código de país + número (sin +, espacios ni guiones)
// Ejemplo México: 5215512345678

const TELEFONO = "529993333295";


//======================================================
// VALIDACIÓN
//======================================================

function validarTexto(texto){

    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/;

    return expresion.test(texto);

}


//======================================================
// ENVIAR FORMULARIO
//======================================================

function enviarFormulario(){

    const boton = document.getElementById("btnEnviar");

    const nombre = document.getElementById("nombre").value.trim();

    const apellidos = document.getElementById("apellidos").value.trim();

    const asistencia = document.getElementById("asistencia").value;

   // const personas = document.getElementById("personas").value;

  //  const comentarios = document.getElementById("comentarios").value.trim();



    //--------------------------------------------------
    // VALIDACIONES
    //--------------------------------------------------

    if(nombre==""){

        alert("Por favor escribe tu nombre.");

        document.getElementById("nombre").focus();

        return;

    }

    if(!validarTexto(nombre)){

        alert("El nombre solamente puede contener letras.");

        document.getElementById("nombre").focus();

        return;

    }



    if(apellidos==""){

        alert("Por favor escribe tus apellidos.");

        document.getElementById("apellidos").focus();

        return;

    }

    if(!validarTexto(apellidos)){

        alert("Los apellidos solamente pueden contener letras.");

        document.getElementById("apellidos").focus();

        return;

    }



    if(asistencia==""){

        alert("Selecciona si asistirás al evento.");

        document.getElementById("asistencia").focus();

        return;

    }



    if(personas < 1){

        alert("El número de personas debe ser mayor que cero.");

        document.getElementById("personas").focus();

        return;

    }



    //--------------------------------------------------
    // EVITAR DOBLE CLIC
    //--------------------------------------------------

    boton.disabled = true;

    boton.innerHTML = "Enviando...";



    //--------------------------------------------------
    // MENSAJE WHATSAPP
    //--------------------------------------------------

    let mensaje =

`🎉 *Confirmación de Asistencia* 🎉

Hola.
Mi nombre es:
*${nombre} ${apellidos}*
Confirmo que:
*${asistencia}*
Número de personas:
*${personas}*
Comentarios:
${comentarios=="" ? "Sin comentarios." : comentarios}
Muchas gracias.`;


    //--------------------------------------------------
    // ABRIR WHATSAPP
    //--------------------------------------------------

    const url =

`https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)}`;

    setTimeout(function(){

        window.open(url,"_blank");

        boton.disabled = false;

        boton.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Confirmar por WhatsApp';

        document.getElementById("formulario").reset();

        alert("¡Gracias por confirmar tu asistencia!");

    },800);

}
