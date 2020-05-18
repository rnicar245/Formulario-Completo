/**
    * @author Rafael Jesús Nieto Cardador
*/


    let Validar = (function() {
        const expresiones = new Map();
        expresiones.set("correo", /^[1-9a-zA-ZáéíóúÁÉÍÓÚñÑ]+@[1-9a-zA-ZáéíóúÁÉÍÓÚñÑ]+\.[a-z]{2,3}$/);
        expresiones.set("dni", /^(\d{8}) ?([a-zA-Z]$)/); //12345678 A
        expresiones.set("fecha" , /^(\d{2})([/-])(\d{2})([/-])(\d{4})$/);
        expresiones.set("tel", /^\d{3}([ ]?)\d{2}\1\d{2}\1\d{2}$/);
        expresiones.set("url" , /^http[s]?:\/\/([w]{3}\.)?.+\.[a-z]{2,3}[[\/.+]*|\/]$/);

        function validarTexto(texto){
            if(texto == ""){
                return "ERROR: El texto no puede estar vacío.";
            }
            return "";
        }
        
        function validarNum(num){
            if(num == ""){
                return "ERROR: El número no puede estar vacío.";
            }

            if(isNaN(num)){
                return "ERROR: La cadena introducida no es numérica."
            }

            return "";
        }

        function validarCorreo(email){
            if(email == ""){
                return "ERROR: El correo no puede estar vacío.";
            }
            if(!expresiones.get("correo").test(email)){
                return "ERROR: El formato del correo es incorrecto (Ej example@gmail.com)."
            }
            return "";
        }

        function validarDNI(dni){
            try{
                const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
                let dniReg = expresiones.get("dni");
                
                if(dni == ""){
                    return "ERROR: El DNI no puede estar vacío.";
                }

                let [,num, letra] = dniReg.exec(dni);

                if(letra.toUpperCase() != letras[num%23]){
                    return "ERROR: La letra introducida no es correcta.";
                }
    
                return "";
            }catch(er){
                console.log(er);
                return "ERROR: El formato del DNI es incorrecto.";
            }
           
            
        }

        function validarFecha (fecha){
            let fechaExec = expresiones.get("fecha").exec(fecha);

            if(fecha == ""){
                return "ERROR: La fecha no puede estar vacía.";
            }

            if(fechaExec == null){
                return "ERROR: El formato de la fecha es incorrecto. (DD-MM-AAAA)";
            }

            let [,dia, signo1, mes, signo2, ano] = fechaExec;

            let fechaObjeto = new Date(`${ano}/${mes}/${dia}`);
            
            if(signo1 != signo2){
                return "ERROR: El formato de la fecha es incorrecto. (Puedes usar / o - para separar la fecha, pero no ambos.)";
            }

            if(Number(dia) != fechaObjeto.getDate() || Number(mes) != fechaObjeto.getMonth() +1 || Number(ano) != fechaObjeto.getFullYear()){
                return "ERROR: La fecha es incorrecta (Ejemplo: día 45 de febrero).";
            }  

            return "";
        }

        function validarTel (tel){
            if(tel == ""){
                return "ERROR: El teléfono no puede estar vacío.";
            }
            
            if(!expresiones.get("tel").test(tel)){
                return "ERROR: El formato del número de teléfono es incorrecto (Ej 657 01 23 45 o 657012345).";
            }

            return "";
             
        }

        function validarUrl (url){
            if(url == ""){
                return "ERROR: La URL no puede estar vacía.";
            }
            
            if(!expresiones.get("url").test(url)){
                return "ERROR: El formato de la URL es incorrecto. (Ej https://example.com/example/).";
            }
            return "";
        }

        function validarModulo (modulo){
            if(modulo == undefined || modulo == ""){
                return "ERROR: Debes elegir un módulo.";
            }
             
            return "";
        }

        function validarAficiones (aficiones){
            if(!aficiones[0].checked && !aficiones[1].checked && !aficiones[2].checked){
                return "ERROR: Debes elegir al menos una afición.";
            }
            return "";
             
        }

        function validarGrado (grado){
            if(!grado.checked && !grado.nextElementSibling.checked){
                return "ERROR: Debes elegir un grado.";
            }
            return "";
        }

        return{
            validarTexto: validarTexto,
            validarNum: validarNum,
            validarCorreo: validarCorreo,
            validarDNI: validarDNI,
            validarFecha: validarFecha,
            validarTel:validarTel,
            validarUrl:validarUrl,
            validarModulo:validarModulo,
            validarAficiones:validarAficiones,
            validarGrado:validarGrado
        }

    })();
