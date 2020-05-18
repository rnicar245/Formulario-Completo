/**
    * @author Rafael Jesús Nieto Cardador
*/


    let Validar = (function() {
        const expresiones = new Map();
        expresiones.set("correo", /^[1-9a-zA-ZáéíóúÁÉÍÓÚñÑ]+@[1-9a-zA-ZáéíóúÁÉÍÓÚñÑ]+\.[a-z]{2,3}$/);
        expresiones.set("dni", /^(\d{8})([a-zA-Z]$)/);
        expresiones.set("fecha" , /^(\d{2})([/-])(\d{2})([/-])(\d{4})$/);
        expresiones.set("tel", /^\d{3}([ ]?)\d{2}\1\d{2}\1\d{2}$/);
        expresiones.set("url" , /^http[s]?:\/\/([w]{3}\.)?.+\.[a-z]{2,3}[[\/.+]*|\/]$/);

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
            const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
            let dniReg = expresiones.get("dni");
            let dniExec = dniReg.exec(dni);
            if(dni == ""){
                return "ERROR: El DNI no puede estar vacío.";
            }
            
            if(dniExec == null){
                return "ERROR: El formato del DNI es incorrecto.";
            }
            
            if(dniExec[2] != letras[dniExec[1]%23]){
                return "ERROR: La letra introducida no es correcta.";
            }

            return "";
        }

        function validarFecha (fecha){
            let fechaExec = expresiones.get("fecha").exec(fecha);
            if(fecha == ""){
                return "ERROR: La fecha no puede estar vacía.";
            }
            if(fechaExec == null){
                return "ERROR: El formato de la fecha es incorrecto. (DD-MM-AAAA)";
            }

            let fechaObjeto = new Date(`${fechaExec[5]}/${fechaExec[3]}/${fechaExec[1]}`);
            
            if(fechaExec[2] != fechaExec[4]){
                return "ERROR: El formato de la fecha es incorrecto. (Puedes usar / o - para separar la fecha, pero no ambos.)";
            }

            if(Number(fechaExec[1]) != fechaObjeto.getDate() || Number(fechaExec[3]) != fechaObjeto.getMonth() +1 || Number(fechaExec[5]) != fechaObjeto.getFullYear()){
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
