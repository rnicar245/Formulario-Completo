   /**
     * @author Rafael Jesús Nieto Cardador
    */ 
{
    let formulario = "";
    let errores = "";

    let inicio = function(){
        document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
            e.preventDefault();
            validarFormulario(this.nextElementSibling);         
        });

        errores = Array.from(document.getElementsByTagName("span"));
        errores.forEach(elemento => {
            elemento.style.color = "red";
        });

        formulario = Array.from(document.getElementsByClassName("elementoBlur"));
        for(elemento of formulario){
            elemento.addEventListener("blur", function(){
                    validarInput(this);
            });
        }
        document.getElementById("boton").addEventListener("click", function(){
            
        });

        document.getElementById("reiniciar").addEventListener("click", function(){
            location.reload();
        });
        
        document.getElementById("rellenar").addEventListener("click", function(){
            let cadenasRellenar = ["a", "1", "hola@gmail.com", "07930497M", "01/01/1999", "(+1031)-655-55-55-55", "https://www.hola.com"];
            for(elemento of formulario){
                if(elemento.type == "text"){
                    elemento.value = cadenasRellenar[0];
                    cadenasRellenar.shift();
                }else if(elemento.type == "checkbox" || elemento.type == "radio"){
                    elemento.checked = true;
                }else{
                    elemento.value = "DAW";
                }
            }
        });
        
    }

    let validarFormulario = function(span){
        for(elemento of formulario){
            elemento.dispatchEvent(new Event("blur"));
        }
        //usar find
        let error = errores.find(elemento  => elemento.innerHTML != "");
        if(error == undefined){
            span.innerHTML = "Todo está en orden";
        }else{
            error.previousElementSibling.focus();
            span.innerHTML = "";
        } 
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
                mensajeError = Validar.validarGrado([formulario[11], formulario[12]]);
                break;
        }
        
        error.innerHTML = mensajeError;    
    }

    document.addEventListener("DOMContentLoaded", inicio);
}