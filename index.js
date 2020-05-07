   /**
     * @author Rafael Jesús Nieto Cardador
    */ 
    const expresiones = new Map();
    expresiones.set("correo", /^.+@.+\.[a-z]{2,3}$/);
    expresiones.set("dni", /^(\d{8})([a-zA-Z]$)/);
    expresiones.set("fecha" , /^(\d{2})([/-])(\d{2})([/-])(\d{4})$/);
    expresiones.set("tel", /^\d{3}([ ]?)\d{2}\1\d{2}\1\d{2}$/);
    expresiones.set("url" , /^http[s]?:\/\/([w]{3}\.)?.+\.[a-z]{2,3}[[\/.+]*|\/]$/);
    let formulario = "";
    let indice = -1;
    let desdeValidarFormulario = false;

    let inicio = function(){
        formulario = document.getElementsByClassName("form");
        for(i in formulario){
            if(!isNaN(i)){
                formulario[i].addEventListener("blur", function(){
                    validarInput(this);
                });
            }
        }
        document.getElementById("boton").addEventListener("click", function(){
            validarFormulario(this.nextElementSibling)
        });
    }

    let validarFormulario = function(span){
        desdeValidarFormulario = true;
        [].slice.call(formulario).every(validarInput) ? span.innerHTML = "Todo está en orden" : span.innerHTML = "";
    }

    let validarInput = function(elemento){
        let id = elemento.id;
        let error = elemento.parentElement.nextElementSibling;
        try{
            switch(id){
                case "email":
                    Validar.validarCorreo(elemento.value, expresiones.get("correo"));
                    break;
                case "dni":
                    Validar.validarDNI(elemento.value, expresiones.get("dni"));
                    break;
                case "fecha":
                    Validar.validarFecha(elemento.value, expresiones.get("fecha"));
                    break;
                case "tel":
                    Validar.validarTel(elemento.value, expresiones.get("tel"));
                    break;
                case "url":
                    Validar.validarUrl(elemento.value, expresiones.get("url"));
                    break;
                case "modulo":
                    Validar.validarModulo(elemento.value);
                    break;
                case "aficion3":
                    Validar.validarAficiones([elemento.previousElementSibling.previousElementSibling, elemento.previousElementSibling, elemento]);
                    break;
                case "radio":
                    Validar.validarGrado(elemento.value);
                    break;
            }

            error.innerHTML = "";
            return true;
            
        }catch(er){
            desdeValidarFormulario ? elemento.focus(): null;
            desdeValidarFormulario = false;

            error.innerHTML = er;
            
            return false;
        }
        

    }

    document.addEventListener("DOMContentLoaded", inicio);
