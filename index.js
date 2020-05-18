   /**
     * @author Rafael Jesús Nieto Cardador
    */ 
{
    let formulario = "";
    let errores = "";

    let inicio = function(){
        document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
            e.preventDefault();
        });

        errores = Array.from(document.getElementsByTagName("span"));

        formulario = Array.from(document.getElementsByClassName("elementoBlur"));
        for(elemento of formulario){
            elemento.addEventListener("blur", function(){
                    validarInput(this);
            });
        }
        document.getElementById("boton").addEventListener("click", function(){
            validarFormulario(this.nextElementSibling)
        });

        document.getElementById("reiniciar").addEventListener("click", function(){
            location.reload();
        });
        /** 
        document.getElementById("rellenar").addEventListener("click", function(){
            location.reload();
        });
        */
    }

    let validarFormulario = function(span){
        for(elemento of formulario){
            elemento.dispatchEvent(new Event("blur"));
        }
        let error = true;
        for(elemento of errores){
            if(elemento.innerHTML != "" && error){
                elemento.previousElementSibling.focus();
                error = false;
                break;
            }
        }

        error ? span.innerHTML = "Todo está en orden" : span.innerHTML = "";
    }

    let validarInput = function(elemento){
        let id = elemento.id;
        let error = elemento.parentElement.nextElementSibling;
        let mensajeError = "";
        switch(id){
            case "texto":
                mensajeError = Validar.validarTexto(elemento.value);
                break;
            case "num":
                mensajeError = Validar.validarNum(elemento.value);
                break;
            case "email":
                mensajeError = Validar.validarCorreo(elemento.value);
                break;
            case "dni":
                mensajeError = Validar.validarDNI(elemento.value);
                break;
            case "fecha":
                mensajeError = Validar.validarFecha(elemento.value);
                break;
            case "tel":
                mensajeError = Validar.validarTel(elemento.value);
                break;
            case "url":
                mensajeError = Validar.validarUrl(elemento.value);
                break;
            case "modulo":
                mensajeError = Validar.validarModulo(elemento.value);
                break;
            case "aficion1":
            case "aficion2":
            case "aficion3":
                mensajeError = Validar.validarAficiones([formulario[8], formulario[9], formulario[10]]);
                break;
            case "grado":
                mensajeError = Validar.validarGrado(elemento);
                break;
        }
        
        error.innerHTML = mensajeError;    
    }

    document.addEventListener("DOMContentLoaded", inicio);
}