   /**
     * @author Rafael Jesús Nieto Cardador
    */ 
    let formulario = "";
    let errores = "";

    let inicio = function(){
        document.getElementById("formulario").addEventListener("submit", function (e) {
            e.preventDefault();
        });

        errores = Array.from(document.getElementsByTagName("span"));

        formulario = document.getElementsByClassName("elementoBlur");
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
        for(elemento of formulario){
            elemento.dispatchEvent(new Event("blur"));
        }

        //let error = errores.every((elemento) => elemento.innerHTML == "")
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
        try{
            switch(id){
                case "email":
                    Validar.validarCorreo(elemento.value);
                    break;
                case "dni":
                    Validar.validarDNI(elemento.value);
                    break;
                case "fecha":
                    Validar.validarFecha(elemento.value);
                    break;
                case "tel":
                    Validar.validarTel(elemento.value);
                    break;
                case "url":
                    Validar.validarUrl(elemento.value);
                    break;
                case "modulo":
                    Validar.validarModulo(elemento.value);
                    break;
                case "aficion3":
                    Validar.validarAficiones([elemento.previousElementSibling.previousElementSibling, elemento.previousElementSibling, elemento]);
                    break;
                case "grado":
                    Validar.validarGrado(elemento);
                    break;
            }
            
            error.innerHTML = "";    
            return true;
        }catch(er){
            error.innerHTML = er;
            return false;
        }
    }

    document.addEventListener("DOMContentLoaded", inicio);
